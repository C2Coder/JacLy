import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";
import { read } from "fs";

// ADC import
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        type: "adc_import",
    },
);

Blockly.Blocks['adc_import'] = {
    init: function () {
        dummy(this, 'Import ADC');
        inline(this);
        color(this, "ADC");
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
        dummy(this, 'Configure ADC');
        value(this, "PIN", "  pin:");
        inline(this);
        color(this, "ADC");
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
        dummy(this, 'ADC read');
        value(this, "PIN", "  pin:");
        output(this);
        color(this, "ADC");
    }
}

javascriptGenerator.forBlock['adc_read'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'adc.read(' + generator.valueToCode(block, 'PIN', 0) + ')';
    return [code, Order.NONE];
}
