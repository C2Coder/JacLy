import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";
// GPIO import
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        type: "gpio_import",
    },
);

Blockly.Blocks['gpio_import'] = {
    init: function () {
        dummy(this, 'Import GPIO');
        inline(this);
        color(this, "GPIO");
    }
}

javascriptGenerator.forBlock['gpio_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as gpio from 'gpio';\n"
    return code;
}

// ---- //

// GPIO pinmode
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        blockxml:
            '    <block type="gpio_pinmode">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="MODE">\n' +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['gpio_pinmode'] = {
    init: function () {
        dummy(this, 'Set pin mode');
        value(this, "PIN", "  pin:");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["INPUT", "INPUT"], ["INPUT_PULLUP", "INPUT_PULLUP"], ["INPUT_PULLDOWN", "INPUT_PULLDOWN"], ["OUTPUT", "OUTPUT"], ["DISABLE", "DISABLE"]]), "MODE");
        inline(this);
        color(this, "GPIO");
    }
}

javascriptGenerator.forBlock['gpio_pinmode'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'gpio.pinMode(' + generator.valueToCode(block, 'PIN', 0) + ', gpio.PinMode.' + block.getFieldValue('MODE') + ');\n';
    return code;
}

// ---- //

// GPIO digitalwrite
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        blockxml:
            '    <block type="gpio_write">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="VALUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['gpio_write'] = {
    init: function () {
        dummy(this, 'Pin write');
        value(this, "PIN", "  pin:");
        value(this, "VALUE", "  value:");
        inline(this);
        color(this, "GPIO");
    }
}

javascriptGenerator.forBlock['gpio_write'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'gpio.write(' + generator.valueToCode(block, 'PIN', 0) + ', ' + generator.valueToCode(block, 'VALUE', 0) + ');\n';
    return code;
}

// ---- //

// GPIO digitalread
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        blockxml:
            '    <block type="gpio_read">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['gpio_read'] = {
    init: function () {
        dummy(this, 'Pin read');
        value(this, "PIN", "  pin:");
        output(this);
        color(this, "GPIO");
    }
}

javascriptGenerator.forBlock['gpio_read'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'gpio.read(' + generator.valueToCode(block, 'PIN', 0) + ')';
    return [code, Order.NONE];
}

// ---- //

// GPIO on
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        blockxml:
            '    <block type="gpio_on">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['gpio_on'] = {
    init: function () {
        value(this, "PIN", "  pin:");
        this.appendDummyInput()
            .appendField("  on: ")
            .appendField(new Blockly.FieldDropdown([["rising", "rising"], ["falling", "falling"], ["change", "change"]]), "MODE");
        this.appendStatementInput("CODE")
            .appendField("");

        inline(this);
        color(this, "GPIO");
    }
}

javascriptGenerator.forBlock['gpio_on'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "gpio.on('" + block.getFieldValue('MODE') + "', " + generator.valueToCode(block, "PIN", 0) + ", (info) => {\n" + generator.statementToCode(block, 'CODE') + "});\n";
    return code;
}

// ---- //

// GPIO off
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        blockxml:
            '    <block type="gpio_off">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['gpio_off'] = {
    init: function () {
        dummy(this, 'Pin off');
        value(this, "PIN", "  pin:");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["rising", "rising"], ["falling", "falling"], ["change", "change"]]), "MODE");

        inline(this);
        color(this, "GPIO");
    }
}

javascriptGenerator.forBlock['gpio_off'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "gpio.off('" + block.getFieldValue('MODE') + "', " + generator.valueToCode(block, "PIN", 0) + ');\n';
    return code;
}
