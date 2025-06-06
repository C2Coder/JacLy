import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator} from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { value, inline, color, getVal, getStatement, getField } from "../customBlocks";

Blockly.Blocks['async_func'] = {
    init: function () {
        value(this, "NAME", "async function name");
        inline(this);
        color(this, "Functions");
    }
}

javascriptGenerator.forBlock['async_func'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'async function ' + getVal(g, b, 'NAME').replaceAll("'", "") + '(){\n' + getStatement(g, b, 'CODE') + '};\n';
}

Blockly.Blocks['call_func'] = {
    init: function () {
        value(this, "NAME", "function name");
        inline(this);
        color(this, "Functions");
    }
}

javascriptGenerator.forBlock['call_func'] = function (b: BlockSvg, g: CodeGenerator) {
    return getVal(g, b, 'NAME').replaceAll("'", "") + '();\n';
}