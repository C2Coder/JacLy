import Blockly, { BlockSvg, inputTypes } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getVal, getField, getStatement } from "../customBlocks";


// SimpleRadio import
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_import",
    },
);

Blockly.Blocks['simpleradio_import'] = {
    init: function () {
        dummy(this, 'Import SimpleRadio');
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_import'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_begin'] = {
    init: function () {
        dummy(this, 'Begin');
        value(this, "GROUP", "  group:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_begin'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_sendstring'] = {
    init: function () {
        dummy(this, 'Send string');
        value(this, "STRING", "  string:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_sendstring'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_sendnumber'] = {
    init: function () {
        dummy(this, 'Send number');
        value(this, "NUMBER", "  number:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_sendnumber'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_sendkeyvalue'] = {
    init: function () {
        dummy(this, 'Send key value');
        value(this, "KEY", "  key:");
        value(this, "VALUE", "  value:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_sendkeyvalue'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_on'] = {
    init: function () {
        dropdown(this, "TYPE", "Type", [["number", "number"], ["string", "string"], ["keyvalue", "keyvalue"]]);
        statement(this, "CODE", "  do:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_on'] = function (b: BlockSvg, g: CodeGenerator) {
    var type = getField(b, 'TYPE');

    switch (type) {
        case "number":
            return "simpleradio.on('" + type + "', ( num, info ) => {\n" + getStatement(g, b, 'CODE') + '});\n';
            break;
        case "string":
            return "simpleradio.on('" + type + "', ( str, info ) => {\n" + getStatement(g, b, 'CODE') + '});\n';
            break;
        case "keyvalue":
            return "simpleradio.on('" + type + "', ( key, value, info ) => {\n" + getStatement(g, b, 'CODE') + '});\n';
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

Blockly.Blocks['simpleradio_values'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField(new Blockly.FieldDropdown([["num", "num"], ["str", "str"], ["key", "key"], ["value", "value"]]), "TYPE");

        output(this, String);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_values'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_info'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('info.')
            .appendField(new Blockly.FieldDropdown([["group", "group"], ["address", "address"], ["rssi", "rssi"]]), "TYPE");

        output(this, null);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_info'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_adress'] = {
    init: function () {
        dummy(this, 'Address');
        output(this, String);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_adress'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_group'] = {
    init: function () {
        dummy(this, 'Group');
        output(this, Number);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_group'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_setgroup'] = {
    init: function () {
        dummy(this, 'Set group');
        value(this, "GROUP", "  group:");
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_setgroup'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_end'] = {
    init: function () {
        dummy(this, 'End SimpleRadio');
        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_end'] = function (b: BlockSvg, g: CodeGenerator) {
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

Blockly.Blocks['simpleradio_off'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Off')
            .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["keyvalue", "keyvalue"]]), "TYPE");


        inline(this);
        color(this, "SimpleRadio");
    }
}

javascriptGenerator.forBlock['simpleradio_off'] = function (b: BlockSvg, g: CodeGenerator) {
    return "simpleradio.off('" + getField(b, 'TYPE'); + "');\n";

}