import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, getVal, getField, getStatement } from "../customBlocks";



// LEDC import
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        type: "ledc_import",
    },
);

Blocks['ledc_import'] = {
    init: function () {
        dummy(this, 'Import LEDC');
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_import'] = function (b: Block, g: JsG) {
    return "import * as ledc from 'ledc';\n"
}

// ---- //

// LEDC configure timer
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_configure_timer">\n' +
            '      <value name="TIMER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="FREQUENCY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_configure_timer'] = {
    init: function () {
        dummy(this, 'Configure timer');
        value(this, "TIMER", "  timer:");
        value(this, "FREQUENCY", "  frequency:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_configure_timer'] = function (b: Block, g: JsG) {
    return 'ledc.configureTimer(' + getVal(g, b, 'TIMER') + ', ' + getVal(g, b, 'FREQUENCY') + ');\n';
}

// ---- //

// LEDC configure timer
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_configure_timer_resolution">\n' +
            '      <value name="TIMER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="FREQUENCY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="RESOLUTION">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_configure_timer_resolution'] = {
    init: function () {
        dummy(this, 'Configure timer');
        value(this, "TIMER", "  timer:");
        value(this, "FREQUENCY", "  frequency:");
        value(this, "RESOLUTION", "  resolution:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_configure_timer_resolution'] = function (b: Block, g: JsG) {
    return 'ledc.configureTimer(' + getVal(g, b, 'TIMER') + ', ' + getVal(g, b, 'FREQUENCY') + ', ' + getVal(g, b, 'RESOLUTION') + ');\n';
}

// ---- //

// LEDC configure channel
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_configure_channel">\n' +
            '      <value name="CHANNEL">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TIMER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="DUTY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_configure_channel'] = {
    init: function () {
        dummy(this, 'Configure channel');
        value(this, "CHANNEL", "  channel:");
        value(this, "PIN", "  pin:");
        value(this, "TIMER", "  timer:");
        value(this, "DUTY", "  duty:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_configure_channel'] = function (b: Block, g: JsG) {
    return 'ledc.configureChannel(' + getVal(g, b, 'CHANNEL') + ', ' + getVal(g, b, 'PIN') + ', ' + getVal(g, b, 'TIMER') + ', ' + getVal(g, b, 'DUTY') + ');\n';
}

// ---- //

// LEDC set frequency
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_set_frequency">\n' +
            '      <value name="TIMER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="FREQUENCY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_set_frequency'] = {
    init: function () {

        dummy(this, 'Set frequency');
        value(this, "TIMER", "  timer:");
        value(this, "FREQUENCY", "  frequency:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_set_frequency'] = function (b: Block, g: JsG) {
    return 'ledc.setFrequency(' + getVal(g, b, 'TIMER') + ', ' + getVal(g, b, 'FREQUENCY') + ');\n';
}   

// ---- //  

// LEDC set duty
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_set_duty">\n' +
            '      <value name="CHANNEL">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="DUTY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_set_duty'] = {
    init: function () {
        dummy(this, 'Set duty');
        value(this, "CHANNEL", "  channel:");
        value(this, "DUTY", "  duty:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_set_duty'] = function (b: Block, g: JsG) {
    return 'ledc.setDuty(' + getVal(g, b, 'CHANNEL') + ', ' + getVal(g, b, 'DUTY') + ');\n';
}

// ---- //

// LEDC stop timer
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_stop_timer">\n' +
            '      <value name="TIMER">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_stop_timer'] = {
    init: function () {
        dummy(this, 'Stop timer');
        value(this, "TIMER", "  timer:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_stop_timer'] = function (b: Block, g: JsG) {
    return 'ledc.stopTimer(' + getVal(g, b, 'TIMER') + ');\n';
}

// ---- //

// LEDC stop channel
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        blockxml:
            '    <block type="ledc_stop_channel">\n' +
            '      <value name="CHANNEL">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['ledc_stop_channel'] = {
    init: function () {
        dummy(this, 'Stop channel');
        value(this, "CHANNEL", "  channel:");
        inline(this);
        color(this, "LEDC");
    }
}

jsg.forBlock['ledc_stop_channel'] = function (b: Block, g: JsG) {
    return 'ledc.stopChannel(' + getVal(g, b, 'CHANNEL') + ');\n';
}