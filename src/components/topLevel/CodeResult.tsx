import { FC, InputHTMLAttributes } from "react";
import { useGenerateCode } from "../../context/GenerateCodeContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';


theme.hljs.padding = "10px";

// @ts-expect-error
import { INITIAL_TOOLBOX_JSON } from "../../blockly-config";

export interface CodeResultProps extends InputHTMLAttributes<HTMLInputElement> {
}


const CodeResult: FC<CodeResultProps> = ({ }) => {
    const { code } = useGenerateCode();


    return (
        <div className="code-result w-full overflow-auto hide-scrollbar font-mono rounded">
            <SyntaxHighlighter
                language="javascript"
                style={theme}
                showLineNumbers
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeResult;