import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";


Blockly.Blocks['async_func'] = {
    init: function () {
        this.appendValueInput("NAME")
            .appendField("async function")
        this.appendStatementInput("CODE")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Functions"]);
    }
}

javascriptGenerator.forBlock['async_func'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'async function ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '(){\n' + generator.statementToCode(block, 'CODE') + '};\n';
    return code;
}

Blockly.Blocks['call_func'] = {
    init: function () {
        this.appendValueInput("NAME")
            .appendField("call function")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Functions"]);
    }
}

javascriptGenerator.forBlock['call_func'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '();\n';
    return code;
}