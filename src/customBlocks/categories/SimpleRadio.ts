import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getVal, getField, getStatement } from "../customBlocks";


// SimpleRadio import
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_import",
    },
);

Blocks['simpleradio_import'] = {
    init: function () {
        dummy(this, 'Import SimpleRadio');
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_import'] = function (b: Block, g: JsG) {
    return "import * as simpleradio from 'simpleradio';\n"
}

// ---- //

// SimpleRadio begin
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        blockxml:
            '    <block type="simpleradio_begin">\n' +
            '      <value name="GROUP">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['simpleradio_begin'] = {
    init: function () {
        dummy(this, 'Begin');
        value(this, "GROUP", "  group:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_begin'] = function (b: Block, g: JsG) {
    return 'simpleradio.begin(' + getVal(g, b, 'GROUP') + ');\n';
}


// ---- //

// SimpleRadio sendString
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        blockxml:
            '    <block type="simpleradio_sendstring">\n' +
            '      <value name="STRING">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['simpleradio_sendstring'] = {
    init: function () {
        dummy(this, 'Send string');
        value(this, "STRING", "  string:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_sendstring'] = function (b: Block, g: JsG) {
    return 'simpleradio.sendString(' + getVal(g, b, 'STRING') + ');\n';
}

// ---- //

// SimpleRadio sendNumber
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        blockxml:
            '    <block type="simpleradio_sendnumber">\n' +
            '      <value name="NUMBER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['simpleradio_sendnumber'] = {
    init: function () {
        dummy(this, 'Send number');
        value(this, "NUMBER", "  number:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_sendnumber'] = function (b: Block, g: JsG) {
    return 'simpleradio.sendNumber(' + getVal(g, b, 'NUMBER') + ');\n';
}

// ---- //

// SimpleRadio sendKeyValue
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        blockxml:
            '    <block type="simpleradio_sendkeyvalue">\n' +
            '      <value name="KEY">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="VALUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['simpleradio_sendkeyvalue'] = {
    init: function () {
        dummy(this, 'Send key value');
        value(this, "KEY", "  key:");
        value(this, "VALUE", "  value:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_sendkeyvalue'] = function (b: Block, g: JsG) {
    return 'simpleradio.sendKeyValue(' + getVal(g, b, 'KEY') + ', ' + getVal(g, b, 'VALUE') + ');\n';;
}

// ---- //

// SimpleRadio on
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        blockxml:
            '    <block type="simpleradio_on">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['simpleradio_on'] = {
    init: function () {
        dropdown(this, "TYPE", "Type", [["number", "number"], ["string", "string"], ["keyvalue", "keyvalue"]]);
        statement(this, "CODE", "  do:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_on'] = function (b: Block, g: JsG) {
    var type = getField(b, 'TYPE');

    switch (type) {
        case "number":
            return "simpleradio.on('" + type + "', async ( num, info ) => {\n" + getStatement(g, b, 'CODE') + '});\n';
            break;
        case "string":
            return "simpleradio.on('" + type + "', async ( str, info ) => {\n" + getStatement(g, b, 'CODE') + '});\n';
            break;
        case "keyvalue":
            return "simpleradio.on('" + type + "', async ( key, value, info ) => {\n" + getStatement(g, b, 'CODE') + '});\n';
            break;
        default:
            break;
    }
    return "";
}

// ---- // 

// SimpleRadio values
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_values",
    },
);

Blocks['simpleradio_values'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField(new FieldDropdown([["num", "num"], ["str", "str"], ["key", "key"], ["value", "value"]]), "TYPE");

        output(this, null);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_values'] = function (b: Block, g: JsG) {
    return [getField(b, 'TYPE'), Order.NONE];
}

// ---- //

// SimpleRadio info
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_info",
    },
);

Blocks['simpleradio_info'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('info.')
            .appendField(new FieldDropdown([["group", "group"], ["address", "address"], ["rssi", "rssi"]]), "TYPE");

        output(this, null);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_info'] = function (b: Block, g: JsG) {
    return ['info.' + getField(b, 'TYPE'), Order.NONE];
}

// ---- //

// SimpleRadio adress
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_adress",
    },
);

Blocks['simpleradio_adress'] = {
    init: function () {
        dummy(this, 'Address');
        output(this, null);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_adress'] = function (b: Block, g: JsG) {
    return ['simpleradio.adress()', Order.NONE];
}

// ---- //

// SimpleRadio group
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_group",
    },
);

Blocks['simpleradio_group'] = {
    init: function () {
        dummy(this, 'Group');
        output(this, null);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_group'] = function (b: Block, g: JsG) {
    return ['simpleradio.group()', Order.NONE];
}

// ---- //

// SimpleRadio setGroup
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        blockxml:
            '    <block type="simpleradio_setgroup">\n' +
            '      <value name="GROUP">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['simpleradio_setgroup'] = {
    init: function () {
        dummy(this, 'Set group');
        value(this, "GROUP", "  group:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_setgroup'] = function (b: Block, g: JsG) {
    return 'simpleradio.setGroup(' + getVal(g, b, 'GROUP') + ');\n';
}

// ---- //

// SimpleRadio end
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_end",
    },
);

Blocks['simpleradio_end'] = {
    init: function () {
        dummy(this, 'End SimpleRadio');
        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_end'] = function (b: Block, g: JsG) {
    return 'simpleradio.end();\n';
}

// ---- //

// SimpleRadio off
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_off",
    },
);

Blocks['simpleradio_off'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Off')
            .appendField(new FieldDropdown([["number", "number"], ["string", "string"], ["keyvalue", "keyvalue"]]), "TYPE");


        inline(this);
        color(this, "SimpleRadio");
    }
}

jsg.forBlock['simpleradio_off'] = function (b: Block, g: JsG) {
    return "simpleradio.off('" + getField(b, 'TYPE'); + "');\n";

}