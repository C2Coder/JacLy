import "./index.css";
import DeviceProvider from "./context/JaculusContext";
import GenerateCodeProvider from "./context/GenerateCodeContext";
import ConnectionBar from "./components/topLevel/ConnectionBar";
import Header from "./components/topLevel/Header";
import BlocklyEditor from "./components/topLevel/BlocklyEditor";
import BlocklyEditorFixer from "./components/topLevel/BlockyEditorFixer";
import Monitor from "./components/topLevel/Monitor";
import "./customBlocks/customBlocks";
import CodeResult from "./components/topLevel/CodeResult";


function App() {
    return (
        <DeviceProvider >
            <GenerateCodeProvider>
                <div className="flex flex-col h-full w-full">
                    <Header />
                    <ConnectionBar />
                    <div className="flex flex-row h-full">
                        <div className="w-2/3 min-h-full">
                            <BlocklyEditorFixer />
                            <BlocklyEditor />
                        </div>
                        <div className="w-1/3 ml-2 flex flex-col">
                            <div className="">
                                <CodeResult />
                            </div>
                            <div className="">
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
