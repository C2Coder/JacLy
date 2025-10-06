import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getField, getStatement, getVal } from "../customBlocks";


// Robutek V1 import
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        type: "robutek_v1_import",
    },
);

Blockly.Blocks['robutek_v1_import'] = {
    init: function () {
        dummy(this, 'Import Robutek V1');
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_v1_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import { createRobutek } from './libs/robutek.js';\n" +
        "const robutek = createRobutek('V1');\n";
}

// ---- //

// Robutek V2 import
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        type: "robutek_v2_import",
    },
);

Blockly.Blocks['robutek_v2_import'] = {
    init: function () {
        dummy(this, 'Import Robutek V2');
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_v2_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import { createRobutek } from './libs/robutek.js';\n" +
        "const robutek = createRobutek('V2');\n";
}

// ---- //

// Robutek Pins
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_pin">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blockly.Blocks['robutek_pin'] = {
    init: function () {
        this.appendDummyInput('').appendField('robutek.Pins.')
            .appendField(new Blockly.FieldDropdown([["StatusLED", "StatusLED"],
            ["SmartLeds", "SmartLeds"],
            ["ButtonLeft", "ButtonLeft"],
            ["ButtonRight", "ButtonRight"],
            ["Servo1", "Servo1"],
            ["Servo2", "Servo2"],
                // ["Sens1", "Sens1"],
                // ["Sens2", "Sens2"],
                // ["Sens3", "Sens3"],
                // ["Sens4", "Sens4"],
                // ["SensSW", "SensSW"],
                // ["SensEN", "SensEN"],
                // ["Motor1A", "Motor1A"],
                // ["Motor1B", "Motor1B"],
                // ["Motor2A", "Motor2A"],
                // ["Motor2B", "Motor2B"],
                // ["Enc1A", "Enc1A"],
                // ["Enc1B", "Enc1B"],
                // ["Enc2A", "Enc2A"],
                // ["Enc2B", "Enc2B"],
            ]), "TYPE");

        output(this, Number);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_pin'] = function (b: BlockSvg, g: CodeGenerator) {
    var type = getField(b, 'TYPE');
    return ["robutek.Pins." + type, Order.ATOMIC];
}

// ---- //

// Robutek setspeed
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_setSpeed">\n' +
            '      <value name="SPEED">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blockly.Blocks['robutek_setSpeed'] = {
    init: function () {
        dummy(this, 'motor.setSpeed');
        value(this, 'SPEED', '');
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_setSpeed'] = function (b: BlockSvg, g: CodeGenerator) {
    var speed = getField(b, 'SPEED') || '0';
    return "robutek.setSpeed(" + speed + ");\n";
}

// ---- //

// Robutek setRamp
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_setRamp">\n' +
            '      <value name="RAMP">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blockly.Blocks['robutek_setRamp'] = {
    init: function () {
        dummy(this, 'motor.setRamp');
        value(this, 'RAMP', '');
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_setRamp'] = function (b: BlockSvg, g: CodeGenerator) {
    var ramp = getField(b, 'RAMP') || '0';
    return "robutek.setRamp(" + ramp + ");\n";
}

// ---- //

// Robutek move distance
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_move_distance">\n' +
            '      <value name="CURVE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="DISTANCE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['robutek_move_distance'] = {
    init: function () {
        dummy(this, 'robutek.move');
        value(this, "CURVE", "");
        value(this, "DISTANCE", "  distance:");
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_move_distance'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'robutek.move(' + getVal(g, b, 'CURVE') + ', {distance:' + getVal(g, b, 'DISTANCE') + '});\n';
}

// ---- //

// Robutek move time
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_move_time">\n' +
            '      <value name="CURVE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TIME">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['robutek_move_time'] = {
    init: function () {
        dummy(this, 'robutek.move');
        value(this, "CURVE", "");
        value(this, "TIME", "  time:");
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_move_time'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'robutek.move(' + getVal(g, b, 'CURVE') + ', {time:' + getVal(g, b, 'TIME') + '});\n';
}

// ---- //

// Robutek move inf
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_move_inf">\n' +
            '      <value name="CURVE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['robutek_move_inf'] = {
    init: function () {
        dummy(this, 'robutek.move');
        value(this, "CURVE", "");
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_move_inf'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'robutek.move(' + getVal(g, b, 'CURVE') + ');\n';
}

// ---- //

// Robutek rotate
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        blockxml:
            '    <block type="robutek_rotate">\n' +
            '      <value name="ANGLE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['robutek_rotate'] = {
    init: function () {
        dummy(this, 'robutek.rotate');
        value(this, "ANGLE", "");
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_rotate'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'robutek.rotate(' + getVal(g, b, 'ANGLE') + ');\n';
}