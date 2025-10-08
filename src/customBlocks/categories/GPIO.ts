import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, dropdown, inline, output, color, statement, getField, getVal, getStatement } from "../customBlocks";
// GPIO import
addItemToToolbox(toolbox, "GPIO",
    {
        kind: "block",
        type: "gpio_import",
    },
);

Blocks['gpio_import'] = {
    init: function () {
        dummy(this, 'Import GPIO');
        inline(this);
        color(this, "GPIO");
    }
}

jsg.forBlock['gpio_import'] = function (b: Block, g: JsG) {
    return "import * as gpio from 'gpio';\n"
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

Blocks['gpio_pinmode'] = {
    init: function () {
        dummy(this, 'Set pin mode');
        value(this, "PIN", "  pin:");
        dropdown(this, "MODE", "  mode:", [["INPUT", "INPUT"], ["INPUT_PULLUP", "INPUT_PULLUP"], ["INPUT_PULLDOWN", "INPUT_PULLDOWN"], ["OUTPUT", "OUTPUT"], ["DISABLE", "DISABLE"]]);
        inline(this);
        color(this, "GPIO");
    }
}

jsg.forBlock['gpio_pinmode'] = function (b: Block, g: JsG) {
    return 'gpio.pinMode(' + getVal(g, b, "PIN") + ', gpio.PinMode.' + getField(b, "MODE") + ');\n';
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

Blocks['gpio_write'] = {
    init: function () {
        dummy(this, 'Pin write');
        value(this, "PIN", "  pin:");
        value(this, "VALUE", "  value:");
        inline(this);
        color(this, "GPIO");
    }
}

jsg.forBlock['gpio_write'] = function (b: Block, g: JsG) {
    return 'gpio.write(' + getVal(g, b, "PIN") + ', ' + getVal(g, b, "VALUE") + ');\n';
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

Blocks['gpio_read'] = {
    init: function () {
        dummy(this, 'Pin read');
        value(this, "PIN", "  pin:");
        output(this, Boolean);
        color(this, "GPIO");
    }
}

jsg.forBlock['gpio_read'] = function (b: Block, g: JsG) {
    return ['gpio.read(' + getVal(g, b, "PIN") + ')', Order.NONE];
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

Blocks['gpio_on'] = {
    init: function () {
        value(this, "PIN", "  pin:");
        dropdown(this, "MODE", "  on:", [["rising", "rising"], ["falling", "falling"], ["change", "change"]]);
        statement(this, 'CODE', '  do:');

        inline(this);
        color(this, "GPIO");
    }
}

jsg.forBlock['gpio_on'] = function (b: Block, g: JsG) {
    return "gpio.on('" + getField(b, "MODE") + "', " + getVal(g, b, "PIN") + ", (info) => {\n" + getStatement(g, b, 'CODE') + "});\n";
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

Blocks['gpio_off'] = {
    init: function () {
        dummy(this, 'Pin off');
        value(this, "PIN", "  pin:");
        dropdown(this, "MODE", "  off:", [["rising", "rising"], ["falling", "falling"], ["change", "change"]]);
        inline(this);
        color(this, "GPIO");
    }
}

jsg.forBlock['gpio_off'] = function (b: Block, g: JsG) {
    return "gpio.off('" + getField(b, "MODE") + "', " + getVal(g, b, "PIN") + ');\n';
}
