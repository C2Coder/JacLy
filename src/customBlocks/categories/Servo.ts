import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getVal, getField, getStatement } from "../customBlocks";


// Servo import
addItemToToolbox(toolbox, "Servo",
    {
        kind: "block",
        type: "servo_import",
    },
);

Blocks['servo_import'] = {
    init: function () {
        dummy(this, 'Import Servo');
        inline(this);
        color(this, "Servo");
    }
}

jsg.forBlock['servo_import'] = function (b: Block, g: JsG) {
    return "import { Servo } from './libs/servo.js';\n"
}

// ---- //

// Servo create
addItemToToolbox(toolbox, "Servo",
    {
        kind: "block",
        blockxml:
            '    <block type="create_servo">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">servo</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TIMER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="CHANNEL">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="">1</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['create_servo'] = {
    init: function () {
        dummy(this, 'Create servo');
        value(this, "NAME", "  name:");
        value(this, "PIN", "  pin:");
        value(this, "TIMER", "  timer:");
        value(this, "CHANNEL", "  channel:");
        inline(this);
        color(this, "Servo");
    }
}

jsg.forBlock['create_servo'] = function (b: Block, g: JsG) {
    return 'const servo_' + getVal(g, b, 'NAME').replaceAll("'", "") + ' = new Servo(' + getVal(g, b, 'PIN') + ', ' + getVal(g, b, 'TIMER') + ', ' + getVal(g, b, "CHANNEL") + ');\n';
}

// ---- //

// Servo write
addItemToToolbox(toolbox, "Servo",
    {
        kind: "block",
        blockxml:
            '    <block type="servo_write">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">servo</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="ANGLE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">90</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['servo_write'] = {
    init: function () {
        dummy(this, 'Write servo angle');
        value(this, "NAME", "  name:");
        value(this, "ANGLE", "  angle:");
        inline(this);
        color(this, "Servo");
    }
}

jsg.forBlock['servo_write'] = function (b: Block, g: JsG) {
    return 'servo_' + getVal(g, b, 'NAME').replaceAll("'", "") + '.write(' + getVal(g, b, 'ANGLE') + ');\n';
}


// ---- //

// Servo PenPos
addItemToToolbox(toolbox, "Servo",
    {
        kind: "block",
        blockxml:
            '    <block type="servo_penPos">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['servo_penPos'] = {
    init: function () {
        this.appendDummyInput('').appendField('robutek.PenPos.')
            .appendField(new FieldDropdown([["Down", "Down"],
            ["Up", "Up"],
            ["Unload", "Unload"],
            ]), "POS");

        output(this, Number);
        color(this, "Servo");
    }
}

jsg.forBlock['servo_penPos'] = function (b: Block, g: JsG) {
    var pos = getField(b, 'POS');
    return ["robutek.PenPos." + pos, Order.ATOMIC];
}