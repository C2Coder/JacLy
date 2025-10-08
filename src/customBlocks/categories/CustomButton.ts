import { Block, Blocks, FieldDropdown } from "blockly";
import { javascriptGenerator as jsg, JavascriptGenerator as JsG} from "blockly/javascript";

import { value, inline, color, getVal, getStatement, getField } from "../customBlocks";

Blocks['async_func'] = {
    init: function () {
        value(this, "NAME", "async function name");
        inline(this);
        color(this, "Functions");
    }
}

jsg.forBlock['async_func'] = function (b: Block, g: JsG) {
    return 'async function ' + getVal(g, b, 'NAME').replaceAll("'", "") + '(){\n' + getStatement(g, b, 'CODE') + '};\n';
}

Blocks['call_func'] = {
    init: function () {
        value(this, "NAME", "function name");
        inline(this);
        color(this, "Functions");
    }
}

jsg.forBlock['call_func'] = function (b: Block, g: JsG) {
    return getVal(g, b, 'NAME').replaceAll("'", "") + '();\n';
}