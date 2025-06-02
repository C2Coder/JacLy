import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// I2C import
addItemToToolbox(toolbox, "I2C",
    {
        kind: "block",
        type: "i2c_import",
    },
);

Blockly.Blocks['i2c_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import I2C');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["I2C"]);
    }
}

javascriptGenerator.forBlock['i2c_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as i2c from 'i2c';\n"
    return code;
}

// GPIO digitalwrite
addItemToToolbox(toolbox, "I2C",
    {
        kind: "block",
        blockxml:
            '    <block type="i2c_find">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['i2c_find'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Pin write');
        this.appendValueInput("PIN")
            .appendField("  pin:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["I2C"]);
    }
}

javascriptGenerator.forBlock['i2c_find'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'i2c.find(' + generator.valueToCode(block, 'PIN', 0) + ');\n';
    return code;
}

