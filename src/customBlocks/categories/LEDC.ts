import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";



// LEDC import
addItemToToolbox(toolbox, "LEDC",
    {
        kind: "block",
        type: "ledc_import",
    },
);

Blockly.Blocks['ledc_import'] = {
    init: function () {
        dummy(this, 'Import LEDC');
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as ledc from 'ledc';\n"
    return code;
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

Blockly.Blocks['ledc_configure_timer'] = {
    init: function () {
        dummy(this, 'Configure timer');
        value(this, "TIMER", "  timer:");
        value(this, "FREQUENCY", "  frequency:");
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_configure_timer'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.configureTimer(' + generator.valueToCode(block, 'TIMER', 0) + ', ' + generator.valueToCode(block, 'FREQUENCY', 0) + ');\n';
    return code;
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

Blockly.Blocks['ledc_configure_timer_resolution'] = {
    init: function () {
        dummy(this, 'Configure timer');
        value(this, "TIMER", "  timer:");
        value(this, "FREQUENCY", "  frequency:");
        value(this, "RESOLUTION", "  resolution:");
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_configure_timer_resolution'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.configureTimer(' + generator.valueToCode(block, 'TIMER', 0) + ', ' + generator.valueToCode(block, 'FREQUENCY', 0) + ', ' + generator.valueToCode(block, 'RESOLUTION', 0) + ');\n';
    return code;
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

Blockly.Blocks['ledc_configure_channel'] = {
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

javascriptGenerator.forBlock['ledc_configure_channel'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.configureChannel(' + generator.valueToCode(block, 'CHANNEL', 0) + ', ' + generator.valueToCode(block, 'PIN', 0) + ', ' + generator.valueToCode(block, 'TIMER', 0) + ', ' + generator.valueToCode(block, 'DUTY', 0) + ');\n';
    return code;
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

Blockly.Blocks['ledc_set_frequency'] = {
    init: function () {

        dummy(this, 'Set frequency');
        value(this, "TIMER", "  timer:");
        value(this, "FREQUENCY", "  frequency:");
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_set_frequency'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.setFrequency(' + generator.valueToCode(block, 'TIMER', 0) + ', ' + generator.valueToCode(block, 'FREQUENCY', 0) + ');\n';
    return code;
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

Blockly.Blocks['ledc_set_duty'] = {
    init: function () {
        dummy(this, 'Set duty');
        value(this, "CHANNEL", "  channel:");
        value(this, "DUTY", "  duty:");
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_set_duty'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.setDuty(' + generator.valueToCode(block, 'CHANNEL', 0) + ', ' + generator.valueToCode(block, 'DUTY', 0) + ');\n';
    return code;
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

Blockly.Blocks['ledc_stop_timer'] = {
    init: function () {
        dummy(this, 'Stop timer');
        value(this, "TIMER", "  timer:");
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_stop_timer'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.stopTimer(' + generator.valueToCode(block, 'TIMER', 0) + ');\n';
    return code;
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

Blockly.Blocks['ledc_stop_channel'] = {
    init: function () {
        dummy(this, 'Stop channel');
        value(this, "CHANNEL", "  channel:");
        inline(this);
        color(this, "LEDC");
    }
}

javascriptGenerator.forBlock['ledc_stop_channel'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'ledc.stopChannel(' + generator.valueToCode(block, 'CHANNEL', 0) + ');\n';
    return code;
}