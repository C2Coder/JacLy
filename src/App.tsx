import "./index.css";
import DeviceProvider from "./context/JaculusContext";
import GenerateCodeProvider from "./context/GenerateCodeContext";
import TopBar from "./components/topLevel/TopBar";
import Header from "./components/topLevel/Header";
import BlocklyEditor from "./components/topLevel/BlocklyEditor";
import BlocklyEditorFixer from "./components/topLevel/BlockyEditorFixer";
import Monitor from "./components/topLevel/Monitor";
import "./customBlocks/customBlocks";
import CodeResult from "./components/topLevel/CodeResult";
import { useState } from "react";


function App() {
    const [currentWorkspaceJson, setCurrentWorkspaceJson] = useState<object>({});
    const [externalJson, setExternalJson] = useState<object | undefined>(undefined);

    const handleWorkspaceChange = (workspaceJson: object) => {
        setCurrentWorkspaceJson(workspaceJson);
    };

    const handleLoadWorkspace = (workspaceJson: object) => {
        setExternalJson(workspaceJson);
        // Reset external JSON after it's been applied
        setTimeout(() => setExternalJson(undefined), 200);
    };

    return (
        <DeviceProvider >
            <GenerateCodeProvider>
                <div className="flex flex-col h-full w-full">
                    <Header />
                    <TopBar 
                        currentWorkspaceJson={currentWorkspaceJson}
                        onLoadWorkspace={handleLoadWorkspace}
                    />
                    <div className="grid grid-cols-3 gap-2 h-full">
                        <div className="col-span-2 min-h-full">
                            <BlocklyEditorFixer />
                            <BlocklyEditor 
                                onWorkspaceChange={handleWorkspaceChange}
                                externalJson={externalJson}
                            />
                        </div>
                        <div className="col-span-1 flex flex-col">
                            <div className="w-full">
                                <CodeResult />
                            </div>
                            <div className="w-full">
                                <Monitor />
                            </div>
                        </div>
                    </div>
                </div>
            </GenerateCodeProvider>
        </DeviceProvider>
    );
}

export default App;
