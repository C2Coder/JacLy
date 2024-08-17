import {FC, InputHTMLAttributes, useRef, useState} from "react";
import {useGenerateCode} from "../../context/GenerateCodeContext";
import Blockly from "blockly";
import {javascriptGenerator} from "blockly/javascript";
import {BlocklyWorkspace} from "react-blockly";
import "./../../customBlocks/customBlocks";

import {toolbox} from "../../customBlocks/toolbox";
export interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
}

const defaultJson = "{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"variables_set\",\"id\":\"kZ{ZEV/O8cPC_oh[Mpjn\",\"x\":250,\"y\":218,\"fields\":{\"VAR\":{\"id\":\"C(8;cYCF}~vSgkxzJ+{O\"}},\"inputs\":{\"VALUE\":{\"block\":{\"type\":\"math_number\",\"id\":\"--,JgL_QK!$/M2(lpR^@\",\"fields\":{\"NUM\":0}}}},\"next\":{\"block\":{\"type\":\"set_interval\",\"id\":\"V_=!FlwxB^y*25j%~7C3\",\"inputs\":{\"INTERVAL\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"[4j05-#y^%Q@ie*HVkeg\",\"fields\":{\"NUM\":1000}}},\"CODE\":{\"block\":{\"type\":\"console\",\"id\":\"C-+=%9dmwT9NND+F(LgH\",\"fields\":{\"type\":\"log\"},\"inputs\":{\"text\":{\"shadow\":{\"type\":\"text\",\"id\":\"/#dp!xm?6YywQn{f}P#U\",\"fields\":{\"TEXT\":\"\"}},\"block\":{\"type\":\"text_join\",\"id\":\"q,-[sl[oyFUS8Zk4hFQA\",\"extraState\":{\"itemCount\":2},\"inputs\":{\"ADD0\":{\"block\":{\"type\":\"text\",\"id\":\";UHIu%eF5=Gb%CxZgDQT\",\"fields\":{\"TEXT\":\"JacLy - index: \"}}},\"ADD1\":{\"block\":{\"type\":\"variables_get\",\"id\":\"AdTAoR8q$rXJ6Ov7.6J(\",\"fields\":{\"VAR\":{\"id\":\"C(8;cYCF}~vSgkxzJ+{O\"}}}}}}}},\"next\":{\"block\":{\"type\":\"math_change\",\"id\":\"|)7{~;~4p=KQS#]kcNyj\",\"fields\":{\"VAR\":{\"id\":\"C(8;cYCF}~vSgkxzJ+{O\"}},\"inputs\":{\"DELTA\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"B!#ac;Nw5OZGlOTjpc?2\",\"fields\":{\"NUM\":1}}}}}}}}}}}}]},\"variables\":[{\"name\":\"i\",\"id\":\"C(8;cYCF}~vSgkxzJ+{O\"}]}"

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