import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";


// Smartled import
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        type: "smartled_import",
    },
);

Blockly.Blocks['smartled_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import smartled');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['smartled_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'import { SmartLed, LED_WS2812, LED_WS2812B, LED_WS2812B_2020, LED_SK6812, LED_WS2813 } from "smartled";\n'
        + 'function HsvToRgb(h, s, v) { let f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);\n'
        + '    return { r: Math.round(f(5) * 255), g: Math.round(f(3) * 255), b: Math.round(f(1) * 255)}; }\n'
        + 'function HexToRgb(hex) { const [r, g, b] = hex.replace("#", "").match(/.{1,2}/g).map(c => parseInt(c, 16));\n'
        + '    return { r, g, b }; }\n\n'

    return code;
}

// ---- //

// Smartled create strip
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="create_strip">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">ledStrip</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="COUNT">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TYPE">\n' +
            '        <shadow type="text">\n' +
            '          <field name=""></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['create_strip'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Create strip');
        this.appendValueInput("NAME")
            .appendField("  name:")
        this.appendValueInput("PIN")
            .appendField("  pin:")
        this.appendValueInput("COUNT")
            .appendField("  count:")
        this.appendDummyInput("")
            .appendField("  type:")
            .appendField(new Blockly.FieldDropdown([
                ['WS2812', 'LED_WS2812'],
                ['WS2812B', 'LED_WS2812B'],
                ['WS2812B_2020', 'LED_WS2812B_2020'],
                ['SK6812', 'LED_SK6812'],
                ['WS2813', 'LED_WS2813']
            ]), 'TYPE');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['create_strip'] = function (block: BlockSvg, generator: CodeGenerator) {
    return 'const ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + ' = new SmartLed(' + generator.valueToCode(block, 'PIN', 0) + ', ' + generator.valueToCode(block, 'COUNT', 0) + ', ' + block.getFieldValue('TYPE') + ');\n';
}

// ---- //

// Smartled set hex
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="set_hex">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">ledStrip</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="INDEX">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="COLOR">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#fe8800</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['set_hex'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Set HEX');
        this.appendValueInput('NAME')
            .appendField('  name:');
        this.appendValueInput('COLOR')
            .appendField('  color:');
        this.appendValueInput('INDEX')
            .appendField('  index:')

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['set_hex'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "")
        + '.set(' + generator.valueToCode(block, 'INDEX', 0)
        + ', HexToRgb(' + generator.valueToCode(block, 'COLOR', 0) + '));\n';
    return code;
}

// ---- //

// Smartled set hsv
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="set_hsv">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">ledStrip</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="INDEX">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="HUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="SATURATION">\n' +
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

Blockly.Blocks['set_hsv'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Set HSV');
        this.appendValueInput('NAME')
            .appendField('  name:');
        this.appendValueInput('INDEX')
            .appendField('  index:');
        this.appendValueInput('HUE')
            .appendField('  H (0-360):')
        this.appendValueInput('SATURATION')
            .appendField('  S (0-1):')
        this.appendValueInput('VALUE')
            .appendField('  V (0-1):')

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['set_hsv'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "")
        + '.set(' + generator.valueToCode(block, 'INDEX', 0)
        + ', HsvToRgb(' + generator.valueToCode(block, 'HUE', 0)
        + ', ' + generator.valueToCode(block, 'SATURATION', 0)
        + ', ' + generator.valueToCode(block, 'VALUE', 0) + '));\n';
    return code;
}

// ---- //

// Smartled set rgb
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="set_rgb">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">ledStrip</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="INDEX">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="R">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="R">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="G">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="G">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="B">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="B">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['set_rgb'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Set RGB');
        this.appendValueInput('NAME')
            .appendField('  name:');
        this.appendValueInput('INDEX')
            .appendField('  index:');
        this.appendValueInput('R')
            .appendField('  R (0-256):')
        this.appendValueInput('G')
            .appendField('  G (0-256):')
        this.appendValueInput('B')
            .appendField('  B (0-256):')

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['set_rgb'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "")
        + '.set(' + generator.valueToCode(block, 'INDEX', 0)
        + ', {r: ' + generator.valueToCode(block, 'R', 0)
        + ', g: ' + generator.valueToCode(block, 'G', 0)
        + ', b: ' + generator.valueToCode(block, 'B', 0) + '});\n';
    return code;
}

// ---- //

// Smartled clear
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="strip_clear">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">ledStrip</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['strip_clear'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Clear strip');
        this.appendValueInput("NAME")
            .appendField("  name:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['strip_clear'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '.clear();\n'
    return code;
}

// ---- //

// Smartled show
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="strip_show">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">ledStrip</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['strip_show'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Show strip');
        this.appendValueInput("NAME")
            .appendField("  name:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['strip_show'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "")
        + '.show();\n'
    return code;
}
