import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";

Blockly.Blocks['async_func'] = {
    init: function () {
        value(this, "NAME", "async function name");
        inline(this);
        color(this, "Functions");
    }
}

javascriptGenerator.forBlock['async_func'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'async function ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '(){\n' + generator.statementToCode(block, 'CODE') + '};\n';
    return code;
}

Blockly.Blocks['call_func'] = {
    init: function () {
        value(this, "NAME", "function name");
        inline(this);
        color(this, "Functions");
    }
}

javascriptGenerator.forBlock['call_func'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '();\n';
    return code;
}