import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";


// ADC import
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        type: "adc_import",
    },
);

Blockly.Blocks['adc_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import ADC');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["ADC"]);
    }
}

javascriptGenerator.forBlock['adc_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as adc from 'adc';\n"
    return code;
}

// ---- //

// ADC configure
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        blockxml:
            '    <block type="adc_configure">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n"
    }
);

Blockly.Blocks['adc_configure'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Configure ADC')
        this.appendValueInput("PIN")
            .appendField("  pin:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["ADC"]);
    }
};

javascriptGenerator.forBlock['adc_configure'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'adc.configure(' + generator.valueToCode(block, 'PIN', 0) + ');\n';
    return code;
}

// ---- //

// ADC read
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        blockxml:
            '    <block type="adc_read">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blockly.Blocks['adc_read'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Read ADC');
        this.appendValueInput("PIN")
            .appendField("  pin:");
        
        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, Number);
        this.setColour(colors["ADC"]);
    }
}

javascriptGenerator.forBlock['adc_read'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'adc.read(' + generator.valueToCode(block, 'PIN', 0) + ')';
    return [code, Order.NONE];
}
