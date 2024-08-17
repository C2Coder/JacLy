import Blockly, { BlockSvg, FieldColour, FieldTextInput } from "blockly";
// import 'blockly/javascript';
import { javascriptGenerator } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, Toolbox, ToolboxItem, CustomCategory, colors } from "./toolbox";

const cfg_inlineInputs = true;


function addItemToToolbox(
    toolbox: Toolbox,
    categoryName: string,
    item: ToolboxItem
) {
    const category = toolbox.contents.find(
        (cat) => cat.kind === "category" && cat.name === categoryName
    ) as CustomCategory | undefined;

    if (!category) {
        console.error(`Category "${categoryName}" not found.`);
        return;
    }

    if (!category.contents) {
        console.error(`Category contents of "${categoryName}" not found.`);
        return;
    }

    category.contents.push(item);
}



// ========== Logic ==========

// ========== Loops ==========

// #Loops #set #interval

addItemToToolbox(toolbox, "Loops",
    {
        kind: "block",
        blockxml:
            '    <block type="set_interval">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="INTERVAL">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1000</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);


Blockly.Blocks['set_interval'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('setInterval')
        this.appendValueInput("NAME")
            .appendField("  name:")
        this.appendStatementInput("CODE")
            .appendField("do");
        this.appendValueInput("INTERVAL")
            .appendField("ms: ")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Loops"]);
    }
}

javascriptGenerator.forBlock['set_interval'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = '\nvar ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + 'Interval = setInterval(function(){\n' + generator.statementToCode(block, 'CODE') + '}, ' + generator.valueToCode(block, 'INTERVAL', 0) + ');\n';
    return code;
}

// ========== Math ==========

// ========== Text ==========

// ========== Lists ==========

// ========== Colour ==========

// ========== Basic ==========

// #Basic #sleep
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="sleep">\n' +
            '      <value name="TIME">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['sleep'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('await sleep(ms)');
        this.appendValueInput("TIME")
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField("ms:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['sleep'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'await sleep(' + generator.valueToCode(block, 'TIME', 0) + ')\n'
    return code;
}

// ---- //

// #Basic #console
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="console">\n' +
            '      <field name="type">log</field>\n' +
            '      <value name="text">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['console'] = {
    init: function () {
        this.appendValueInput("text")
            .appendField("console")
            .appendField(new Blockly.FieldDropdown([["log", "log"], ["error", "error"], ["info", "info"], ["debug", "debug"]]), "type");

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
};

javascriptGenerator.forBlock['console'] = function (block: BlockSvg, generator: CodeGenerator) {
    var dropdown_type = block.getFieldValue('type');
    //var value_text = block.getFieldValue('text');
    var value_text = generator.valueToCode(block, "text", 0);
    var code = `console.${dropdown_type}(${value_text});\n`;
    return code;
};

// ---- //

// #Basic #raw_code
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="raw_code">\n' +
            '      <value name="CODE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['raw_code'] = {
    init: function () {
        this.appendValueInput('CODE')
            .appendField('')

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic_gray"]);
    }
}

javascriptGenerator.forBlock['raw_code'] = function (block: BlockSvg, generator: CodeGenerator) {
    return generator.valueToCode(block, 'CODE', 0).replaceAll("'", "") + '\n';
}

// ---- //

addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="comment">\n' +
            '      <value name="COMMENT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['comment'] = {
    init: function () {
        this.appendValueInput('COMMENT')
            .appendField('  //');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['comment'] = function (block: BlockSvg, generator: CodeGenerator) {
    return '// ' + generator.valueToCode(block, 'COMMENT', 0).replaceAll("'", "") + '\n';
}

// ========== Smartled ==========

// #Smartled #init
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="smartled_init">\n' +
            "    </block>\n",
    },
);

Blockly.Blocks['smartled_init'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Load smartled');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Smartled"]);
    }
}

javascriptGenerator.forBlock['smartled_init'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'import { SmartLed, LED_WS2812, LED_WS2812B, LED_WS2812B_2020, LED_SK6812, LED_WS2813 } from "smartled";\n'
    + 'function HsvToRgb(h, s, v) { let f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);\n'
    + '    return { r: Math.round(f(5) * 255), g: Math.round(f(3) * 255), b: Math.round(f(1) * 255)}; }\n'
    + 'function HexToRgb(hex) { const [r, g, b] = hex.replace("#", "").match(/.{1,2}/g).map(c => parseInt(c, 16));\n'
    + '    return { r, g, b }; }\n\n'

    return code;
}

// ---- //

// #Smartled #create strip

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

// #Smartled #set #hex

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

// #Smartled #set #hsv

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

// #Smartled #set #rgb

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

// #Smartled #clear
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

// #Smartled #show
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

// ========== Custom Button ==========
// ========== Variables ==========
// ========== Functions ==========





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
