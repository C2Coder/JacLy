import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { useDevice } from "../../context/JaculusContext";
import { Buffer } from "buffer";
import Button from "./Button";
import { useGenerateCode } from "../../context/GenerateCodeContext";
import axios from "axios";


export interface UploadLibsBtnProps extends InputHTMLAttributes<HTMLInputElement> {
}

const UploadLibsBtn: FC<UploadLibsBtnProps> = ({ }) => {
    const { setNewDevice, disconnectDevice, device } = useDevice();
    const { code } = useGenerateCode();

    let installStatus = 0;
    // 0 = no libs dir
    // 1 = libs dir exists

    type manifestDataType = {
        description: string;
        examples: {
            file: string;
            name: string;
        }[];
        files: string[];
        folder: string;
        name: string;
    }[]
    const [manifestData, setManifestData] = useState<manifestDataType | null>(null);

    const baseURL = "https://c2coder.github.io/Jaculus-libraries/"

    // Fetch the manifest JSON file
    useEffect(() => {
        axios.get(baseURL + "data/manifest.json")
            .then((response) => {
                setManifestData(response.data); // response.data is already parsed JSON
            })
            .catch((error) => {
                console.error('Error fetching the manifest JSON file:', error);
            });
    }, []);

    const upload_libs = async () => {
        if (!device)
            return;

        // Check if got manifest file
        if (manifestData == null) {
            console.error("Manifest data is null");
            return;
        }

        let codeLines = code.split("\n");

        let filesInIndexFile: string[] = [];
        let filesToImport: string[][][] = [];

        // Find what files are in the index file
        for (let i = 0; i < codeLines.length; i++) {
            if (codeLines[i].startsWith("import") && codeLines[i].includes("./libs/")) {
                let libName = codeLines[i].split("from")[1].replace("./libs/", "").replaceAll("'", "").replaceAll("\"", "").replace(";", "").replace(" ", "")
                filesInIndexFile.push(libName);
            }
        }

        // Remove duplicates
        filesInIndexFile = [...new Set(filesInIndexFile)];

        // Find what libs to import
        manifestData.forEach(lib => {
            lib.files.forEach(file => {
                file = file.replace(".ts", ".js");
                if (filesInIndexFile.includes(file)) {
                    console.log("Install lib: " + lib.folder + "due to file: " + file);
                    const files = lib.files.map(item => [lib.folder, item.replace(".ts", ".js")]);
                    filesToImport.push(files);
                }
            });
        });

        // Lock the device
        await device.controller.lock().catch((err) => {
            console.error("Error locking device: " + err);
            throw 1;
        });

        // Check if libs folder exists
        await device.uploader.listDirectory("code").then((dirs: [string, boolean, number][]) => {
            dirs.forEach(dir => {
                if (dir[0].includes("libs")) {
                    console.log("Found libs folder\n");
                    installStatus = 1;
                }
            });
        });

        // If libs folder doesn't exist, create it
        if (installStatus == 0) {
            console.log("Creating libs folder");
            await device.uploader.createDirectory("code/libs").catch((err) => {
                console.error("Error creating libs folder: " + err);
                throw 1;
            });
            installStatus = 1;
        }

        // Make sure that libs folder exists and everything is ready
        if (installStatus == 1) {
            // Stop the device
            await device.controller.stop().catch((err) => {
                console.error("Error stopping device: " + err);
            });

            try {
                // Make a list of URLs to fetch
                let fileUrls: string[] = [];
                filesToImport.forEach(files => {
                    files.forEach(file => {
                        let url = baseURL + "data/" + file[0] + "/" + file[1];
                        if (fileUrls.includes(url)) {
                            console.log("Duplicate file: " + url);
                        } else {
                            fileUrls.push(url);
                        }
                    });
                })

                // Fetch the files concurrently
                const filePromises = fileUrls.map(async (url) => {
                    const response = await axios.get(url);
                    return [url, response.data];
                });
                const fileData = await Promise.all(filePromises);

                // Process each file content sequentially
                for (const data of fileData) {
                    const url = data[0];
                    const content = data[1];

                    const fileName = url.split("/").pop();
                    console.log("Uploading: " + fileName);

                    let buff = Buffer.from(content, "utf-8")
                    const cmd = await device.uploader.writeFile("/data/code/libs/" + fileName, buff).catch((err) => {
                        console.error("Error: " + err + "\n");
                        throw 1;
                    });
                    console.log(cmd.toString() + "\n");
                }

            } catch (error) {
                console.error('Error fetching the files:', error);
            }
        }


        // Start the program
        await device.controller.start("index.js").catch((err) => {
            console.error("Error starting program: " + err + "\n");
            throw 1;
        });

        // Unlock the device
        await device.controller.unlock().catch((err) => {
            console.log("Error unlocking device: " + err);
            throw 1;
        });
    }

    let whenDisconnected = () => {
        return <>
            <Button text="Upload libs" active={false} />
        </>;
    }

    let whenConnected = () => {
        return <>
            <Button text="Upload libs" active={true} onClick={upload_libs} />
        </>;
    }

    return (
        <>
            {device ? whenConnected() : whenDisconnected()}
        </>
    );
}

export default UploadLibsBtn;