import {FC, InputHTMLAttributes} from "react";
import {useGenerateCode} from "../../context/GenerateCodeContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


// @ts-expect-error
import {INITIAL_TOOLBOX_JSON} from "../../blockly-config";

export interface CodeResultProps extends InputHTMLAttributes<HTMLInputElement> {
}


const CodeResult: FC<CodeResultProps> = ({}) => {
    const {code} = useGenerateCode();


    return (
        <div className="code-result w-full overflow-auto hide-scrollbar font-mono rounded">
            <SyntaxHighlighter
              language="javascript" 
              style={atomDark} 
              showLineNumbers 
              lineNumberContainerStyle={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', }} 
              lineNumberStyle={{ gridColumn: '1', minWidth: 'unset', width: '1.5em', textAlign: 'right', paddingRight: 'unset', marginRight: '1em', marginLeft: '0',}}
              >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeResult;