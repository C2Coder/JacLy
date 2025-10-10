import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, getVal, getField, getStatement } from "../customBlocks";

// Smartled import
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        type: "smartled_import",
    },
);

Blocks['smartled_import'] = {
    init: function () {
        dummy(this, 'Import Smartled');
        inline(this);
        color(this, "Smartled");
    }
}

jsg.forBlock['smartled_import'] = function (b: Block, g: JsG) {
    return 'import { SmartLed, LED_WS2812, LED_WS2812B, LED_WS2812B_2020, LED_SK6812, LED_WS2813 } from "smartled";\n'
        + 'import * as colors from "./libs/colors.js";\n' +
        'function HexToRgb(hex_str) { var hex = hex_str.replace("#", ""); return { r: parseInt(hex.substring(0, 2), 16), g: parseInt(hex.substring(2, 4), 16), b: parseInt(hex.substring(4, 6), 16) }; }\n';
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

Blocks['create_strip'] = {
    init: function () {
        dummy(this, 'Create strip');
        value(this, "NAME", "  name:");
        value(this, "PIN", "  pin:");
        value(this, "COUNT", "  count:");
        dropdown(this, 'TYPE', '  type:', [
            ['WS2812', 'LED_WS2812'],
            ['WS2812B', 'LED_WS2812B'],
            ['WS2812B_2020', 'LED_WS2812B_2020'],
            ['SK6812', 'LED_SK6812'],
            ['WS2813', 'LED_WS2813']
        ]);

        inline(this);
        color(this, "Smartled");
    }
}

jsg.forBlock['create_strip'] = function (b: Block, g: JsG) {
    return 'const strip_' + getVal(g, b, 'NAME').replaceAll("'", "") + ' = new SmartLed(' + getVal(g, b, 'PIN') + ', ' + getVal(g, b, 'COUNT') + ', ' + getField(b, 'TYPE') + ');\n';
}

// ---- //

// Smartled set hex
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="smartled_set">\n' +
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

Blocks['smartled_set'] = {
    init: function () {
        dummy(this, 'Set Color');
        value(this, 'NAME', '  name:');
        value(this, 'COLOR', '  color:');
        value(this, 'INDEX', '  index:');
        inline(this);
        color(this, "Smartled");
    }
}

jsg.forBlock['smartled_set'] = function (b: Block, g: JsG) {
    var color = getVal(g, b, 'COLOR');
    if (color.startsWith("'") && color.endsWith("'")) {
        return 'strip_' + getVal(g, b, 'NAME').replaceAll("'", "")
            + '.set(' + getVal(g, b, 'INDEX')
            + ', HexToRgb(' + color + '));\n';
    }
    return 'strip_' + getVal(g, b, 'NAME').replaceAll("'", "")
        + '.set(' + getVal(g, b, 'INDEX')
        + ', ' + color + ');\n';
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

Blocks['strip_clear'] = {
    init: function () {
        dummy(this, 'Clear strip');
        value(this, "NAME", "  name:");
        inline(this);
        color(this, "Smartled");
    }
}

jsg.forBlock['strip_clear'] = function (b: Block, g: JsG) {
    return 'strip_' + getVal(g, b, 'NAME').replaceAll("'", "") + '.clear();\n'
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

Blocks['strip_show'] = {
    init: function () {
        dummy(this, 'Show strip');
        value(this, "NAME", "  name:");
        inline(this);
        color(this, "Smartled");
    }
}

jsg.forBlock['strip_show'] = function (b: Block, g: JsG) {
    return 'strip_' + getVal(g, b, 'NAME').replaceAll("'", "")
        + '.show();\n'
}


// ---- //

// Smartled colors
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="smartled_color">\n' +
            '      <value name="COLOR">\n' +
            '        <shadow type="math_number">\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['smartled_color'] = {
    init: function () {
        this.appendDummyInput('').appendField('colors.')
            .appendField(new FieldDropdown([["red", "red"],
            ["orange", "orange"],
            ["yellow", "yellow"],
            ["green", "green"],
            ["light_blue", "light_blue"],
            ["blue", "blue"],
            ["purple", "purple"],
            ["pink", "pink"],
            ["white", "white"],
            ["off", "off"],
            ]), "COLOR");

        output(this, null);
        color(this, "Smartled");
    }
}

jsg.forBlock['smartled_color'] = function (b: Block, g: JsG) {
    var color = getField(b, 'COLOR');
    return ["colors." + color, Order.ATOMIC];
}


// ---- //

// Smartled colors rgb
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="smartled_color_rgb">\n' +
            '      <value name="R">\n' +
            '        <shadow type="math_number">\n' +
            "          <field name=\"NUM\">0</field>\n" +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="G">\n' +
            '        <shadow type="math_number">\n' +
            "          <field name=\"NUM\">0</field>\n" +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="B">\n' +
            '        <shadow type="math_number">\n' +
            "          <field name=\"NUM\">0</field>\n" +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['smartled_color_rgb'] = {
    init: function () {
        this.appendDummyInput('').appendField('R:')
        this.appendValueInput('R')
        this.appendDummyInput('').appendField('G:')
        this.appendValueInput('G')
        this.appendDummyInput('').appendField('B:')
        this.appendValueInput('B')

        output(this, null);
        color(this, "Smartled");
    }
}

jsg.forBlock['smartled_color_rgb'] = function (b: Block, g: JsG) {
    var rc = getVal(g, b, 'R');
    var gc = getVal(g, b, 'G');
    var bc = getVal(g, b, 'B');
    return ["{r:" + rc + ", g:" + gc + ", b:" + bc + "}", Order.ATOMIC];
}


// ---- //

// Smartled colors hsl
addItemToToolbox(toolbox, "Smartled",
    {
        kind: "block",
        blockxml:
            '    <block type="smartled_color_hsl">\n' +
            '      <value name="H">\n' +
            '        <shadow type="math_number">\n' +
            "          <field name=\"NUM\">0</field>\n" +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="S">\n' +
            '        <shadow type="math_number">\n' +
            "          <field name=\"NUM\">0</field>\n" +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="L">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['smartled_color_hsl'] = {
    init: function () {
        this.appendDummyInput('').appendField('H:')
        this.appendValueInput('H')
        this.appendDummyInput('').appendField('S:')
        this.appendValueInput('S')
        this.appendDummyInput('').appendField('L:')
        this.appendValueInput('L')

        output(this, null);
        color(this, "Smartled");
    }
}

jsg.forBlock['smartled_color_hsl'] = function (b: Block, g: JsG) {
    var hc = getVal(g, b, 'H');
    var sc = getVal(g, b, 'S');
    var lc = getVal(g, b, 'L');
    return ["{h:" + hc + ", s:" + sc + ", l:" + lc + "}", Order.ATOMIC];
}