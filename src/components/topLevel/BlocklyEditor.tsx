import {FC, InputHTMLAttributes, useRef, useState} from "react";
import {useGenerateCode} from "../../context/GenerateCodeContext";
import Blockly from "blockly";
import {javascriptGenerator} from "blockly/javascript";
import {BlocklyWorkspace} from "react-blockly";
import "./../../customBlocks/customBlocks";

import {toolbox} from "../../customBlocks/toolbox";
export interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
}

const defaultJson = '{"blocks":{"languageVersion":0,"blocks":[{"type":"variables_set","id":"Y?k]s#{Xr~,YqBs2fh]t","x":130,"y":170,"fields":{"VAR":{"id":"C(8;cYCF}~vSgkxzJ+{O"}},"inputs":{"VALUE":{"block":{"type":"math_number","id":"C:U)n7kMTy+b,XG{uxL^","fields":{"NUM":0}}}},"next":{"block":{"type":"set_interval","id":"F%q?js8I#%9/ki7ne!|;","inputs":{"NAME":{"shadow":{"type":"text","id":"=_68LlU9{7okadzqzuEh","fields":{"TEXT":""}}},"CODE":{"block":{"type":"console","id":"XO60!gMqEwBhnZ.p)IHd","fields":{"TYPE":"log"},"inputs":{"TEXT":{"shadow":{"type":"text","id":"fNM*#(#5*~Q#vGQ!QZ2!","fields":{"TEXT":""}},"block":{"type":"text_join","id":":t|fc3dH_+UPH|4V]VyS","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"mNfX8`}O`4Q]H.!G_]~8","fields":{"TEXT":"JacLy - index: "}}},"ADD1":{"block":{"type":"variables_get","id":"E[o(]lO4#gYq5t-aCp.{","fields":{"VAR":{"id":"C(8;cYCF}~vSgkxzJ+{O"}}}}}}}},"next":{"block":{"type":"math_change","id":"_t{5oErJ:8+j.S3~?G;{","fields":{"VAR":{"id":"C(8;cYCF}~vSgkxzJ+{O"}},"inputs":{"DELTA":{"shadow":{"type":"math_number","id":"t]D:_fB#0@yvgTT=3Zy4","fields":{"NUM":1}}}}}}}},"INTERVAL":{"shadow":{"type":"math_number","id":"]~,3m4c`7d-s3PqgU?*~","fields":{"NUM":1000}}}}}}}]},"variables":[{"name":"i","id":"C(8;cYCF}~vSgkxzJ+{O"}]}'

const BlocklyEditor: FC<HeaderProps> = ({}) => {

    const {setCode} = useGenerateCode();
    const [json, setJson] = useState<object>(JSON.parse(localStorage.getItem("blockly") || defaultJson));
    const handleWorkspaceChange = (newWorkspace: Blockly.WorkspaceSvg) => {
        console.log("Workspace changed")
        try {
            let jsCode = javascriptGenerator.workspaceToCode(newWorkspace);

            // window.alert to console.log
            // jsCode = jsCode.replaceAll("window.alert", "await sleep(1000);console.log");
            // jsCode = jsCode.replaceAll("function", "async function");
            setCode(jsCode);
        } catch (e) {
            console.error("Error generating code: " + e);
        }
    };

    const onJsonChange = (newJson: object) => {
        setJson(newJson);
        // save to local storage
        localStorage.setItem("blockly", JSON.stringify(newJson));
    }

    return (
        <BlocklyWorkspace
            className="w-full h-full"
            toolboxConfiguration={toolbox}
            onWorkspaceChange={handleWorkspaceChange}
            initialJson={json}
            onJsonChange={onJsonChange}
            workspaceConfiguration={{
                renderer: "zelos",
                grid: {
                    spacing: 20,
                    length: 3,
                    colour: "#ccc",
                    snap: true
                },
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
            }}
        />
    )
}

export default BlocklyEditor;