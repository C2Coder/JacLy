import {FC, InputHTMLAttributes} from "react";
import {useGenerateCode} from "../../context/GenerateCodeContext";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
//import { dark, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// custom theme
const oneDark: { [key: string]: React.CSSProperties } = {
    "code[class*=\"language-\"]": {
      "background": "hsl(220, 13%, 18%)",
      "color": "hsl(220, 14%, 71%)",
      "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
      "fontFamily": "\"Fira Code\", \"Fira Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace",
      "direction": "ltr",
      "textAlign": "left",
      "whiteSpace": "pre",
      "wordSpacing": "normal",
      "wordBreak": "normal",
      "lineHeight": "1.5",
      "MozTabSize": "2",
      "OTabSize": "2",
      "tabSize": "2",
      "WebkitHyphens": "none",
      "MozHyphens": "none",
      "msHyphens": "none",
      "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
      "background": "hsl(220, 13%, 18%)",
      "color": "hsl(220, 14%, 71%)",
      "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
      "fontFamily": "\"Fira Code\", \"Fira Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace",
      "direction": "ltr",
      "textAlign": "left",
      "whiteSpace": "pre",
      "wordSpacing": "normal",
      "wordBreak": "normal",
      "lineHeight": "1.5",
      "MozTabSize": "2",
      "OTabSize": "2",
      "tabSize": "2",
      "WebkitHyphens": "none",
      "MozHyphens": "none",
      "msHyphens": "none",
      "hyphens": "none",
      "padding": ".5em",
      "margin": "0", // this is why this code is here
      "overflow": "scroll",
      "borderRadius": "0.3em"
    },
    "code[class*=\"language-\"]::-moz-selection": {
      "background": "hsl(220, 13%, 28%)",
      "color": "inherit",
      "textShadow": "none"
    },
    "code[class*=\"language-\"] *::-moz-selection": {
      "background": "hsl(220, 13%, 28%)",
      "color": "inherit",
      "textShadow": "none"
    },
    "pre[class*=\"language-\"] *::-moz-selection": {
      "background": "hsl(220, 13%, 28%)",
      "color": "inherit",
      "textShadow": "none"
    },
    "code[class*=\"language-\"]::selection": {
      "background": "hsl(220, 13%, 28%)",
      "color": "inherit",
      "textShadow": "none"
    },
    "code[class*=\"language-\"] *::selection": {
      "background": "hsl(220, 13%, 28%)",
      "color": "inherit",
      "textShadow": "none"
    },
    "pre[class*=\"language-\"] *::selection": {
      "background": "hsl(220, 13%, 28%)",
      "color": "inherit",
      "textShadow": "none"
    },
    ":not(pre) > code[class*=\"language-\"]": {
      "padding": "0.2em 0.3em",
      "borderRadius": "0.3em",
      "whiteSpace": "normal"
    },
    "comment": {
      "color": "hsl(220, 10%, 40%)",
      "fontStyle": "italic"
    },
    "prolog": {
      "color": "hsl(220, 10%, 40%)"
    },
    "cdata": {
      "color": "hsl(220, 10%, 40%)"
    },
    "doctype": {
      "color": "hsl(220, 14%, 71%)"
    },
    "punctuation": {
      "color": "hsl(220, 14%, 71%)"
    },
    "entity": {
      "color": "hsl(220, 14%, 71%)",
      "cursor": "help"
    },
    "attr-name": {
      "color": "hsl(29, 54%, 61%)"
    },
    "class-name": {
      "color": "hsl(29, 54%, 61%)"
    },
    "boolean": {
      "color": "hsl(29, 54%, 61%)"
    },
    "constant": {
      "color": "hsl(29, 54%, 61%)"
    },
    "number": {
      "color": "hsl(29, 54%, 61%)"
    },
    "atrule": {
      "color": "hsl(29, 54%, 61%)"
    },
    "keyword": {
      "color": "hsl(286, 60%, 67%)"
    },
    "property": {
      "color": "hsl(355, 65%, 65%)"
    },
    "tag": {
      "color": "hsl(355, 65%, 65%)"
    },
    "symbol": {
      "color": "hsl(355, 65%, 65%)"
    },
    "deleted": {
      "color": "hsl(355, 65%, 65%)"
    },
    "important": {
      "color": "hsl(355, 65%, 65%)"
    },
    "selector": {
      "color": "hsl(95, 38%, 62%)"
    },
    "string": {
      "color": "hsl(95, 38%, 62%)"
    },
    "char": {
      "color": "hsl(95, 38%, 62%)"
    },
    "builtin": {
      "color": "hsl(95, 38%, 62%)"
    },
    "inserted": {
      "color": "hsl(95, 38%, 62%)"
    },
    "regex": {
      "color": "hsl(95, 38%, 62%)"
    },
    "attr-value": {
      "color": "hsl(95, 38%, 62%)"
    },
    "attr-value > .token.punctuation": {
      "color": "hsl(95, 38%, 62%)"
    },
    "variable": {
      "color": "hsl(207, 82%, 66%)"
    },
    "operator": {
      "color": "hsl(207, 82%, 66%)"
    },
    "function": {
      "color": "hsl(207, 82%, 66%)"
    },
    "url": {
      "color": "hsl(187, 47%, 55%)"
    },
    "attr-value > .token.punctuation.attr-equals": {
      "color": "hsl(220, 14%, 71%)"
    },
    "special-attr > .token.attr-value > .token.value.css": {
      "color": "hsl(220, 14%, 71%)"
    },
    ".language-javascript .token.operator": {
      "color": "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
      "color": "hsl(5, 48%, 51%)"
    },
    "bold": {
      "fontWeight": "bold"
    },
    "italic": {
      "fontStyle": "italic"
    },
    "namespace": {
      "opacity": "0.8"
    },
    "token.tab:not(:empty):before": {
      "color": "hsla(220, 14%, 71%, 0.15)",
      "textShadow": "none"
    },
    "token.cr:before": {
      "color": "hsla(220, 14%, 71%, 0.15)",
      "textShadow": "none"
    },
    "token.lf:before": {
      "color": "hsla(220, 14%, 71%, 0.15)",
      "textShadow": "none"
    },
    "token.space:before": {
      "color": "hsla(220, 14%, 71%, 0.15)",
      "textShadow": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
      "marginRight": "0.4em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
      "background": "hsl(220, 13%, 26%)",
      "color": "hsl(220, 9%, 55%)",
      "padding": "0.1em 0.4em",
      "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
      "background": "hsl(220, 13%, 26%)",
      "color": "hsl(220, 9%, 55%)",
      "padding": "0.1em 0.4em",
      "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
      "background": "hsl(220, 13%, 26%)",
      "color": "hsl(220, 9%, 55%)",
      "padding": "0.1em 0.4em",
      "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
      "background": "hsl(220, 13%, 28%)",
      "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
      "background": "hsl(220, 13%, 28%)",
      "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
      "background": "hsl(220, 13%, 28%)",
      "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
      "background": "hsl(220, 13%, 28%)",
      "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
      "background": "hsl(220, 13%, 28%)",
      "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
      "background": "hsl(220, 13%, 28%)",
      "color": "hsl(220, 14%, 71%)"
    },
    ".line-highlight.line-highlight": {
      "background": "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-highlight.line-highlight:before": {
      "background": "hsl(220, 13%, 26%)",
      "color": "hsl(220, 14%, 71%)",
      "padding": "0.1em 0.6em",
      "borderRadius": "0.3em",
      "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
      "background": "hsl(220, 13%, 26%)",
      "color": "hsl(220, 14%, 71%)",
      "padding": "0.1em 0.6em",
      "borderRadius": "0.3em",
      "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
      "backgroundColor": "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
      "borderRightColor": "hsla(220, 14%, 71%, 0.15)"
    },
    ".command-line .command-line-prompt": {
      "borderRightColor": "hsla(220, 14%, 71%, 0.15)"
    },
    ".line-numbers .line-numbers-rows > span:before": {
      "color": "hsl(220, 14%, 45%)"
    },
    ".command-line .command-line-prompt > span:before": {
      "color": "hsl(220, 14%, 45%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
      "color": "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
      "color": "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
      "color": "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
      "color": "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
      "color": "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
      "color": "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
      "color": "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
      "color": "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
      "color": "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
      "color": "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
      "color": "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
      "color": "hsl(286, 60%, 67%)"
    }
  };

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
              style={oneDark} 
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