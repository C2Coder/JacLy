import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";


// SimpleRadio import
addItemToToolbox(toolbox, "SimpleRadio",
    {
        kind: "block",
        type: "simpleradio_import",
    },
);

Blockly.Blocks['simpleradio_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import SimpleRadio');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as simpleradio from 'simpleradio';\n"
    return code;
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
        this.appendDummyInput('')
            .appendField('Begin');
        this.appendValueInput("GROUP")
            .appendField("  group:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_begin'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.begin(' + generator.valueToCode(block, 'GROUP', 0) + ');\n';
    return code;
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
        this.appendDummyInput('')
            .appendField('Send string');
        this.appendValueInput("STRING")
            .appendField("  string:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_sendstring'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.sendString(' + generator.valueToCode(block, 'STRING', 0) + ');\n';
    return code;
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
        this.appendDummyInput('')
            .appendField('Send number');
        this.appendValueInput("NUMBER")
            .appendField("  number:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_sendnumber'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.sendNumber(' + generator.valueToCode(block, 'NUMBER', 0) + ');\n';
    return code;
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
        this.appendDummyInput('')
            .appendField('Send key value');
        this.appendValueInput("KEY")
            .appendField("  key:")
        this.appendValueInput("VALUE")
            .appendField("  value:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_sendkeyvalue'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.sendKeyValue(' + generator.valueToCode(block, 'KEY', 0) + ', ' + generator.valueToCode(block, 'VALUE', 0) + ');\n';
    return code;
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
        this.appendDummyInput('')
            .appendField("On")
            .appendField(new Blockly.FieldDropdown([["number", "number"], ["string", "string"], ["keyvalue", "keyvalue"]]), "TYPE");
        this.appendStatementInput("CODE")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_on'] = function (block: BlockSvg, generator: CodeGenerator) {
    var type = block.getFieldValue('TYPE');
    var code = '';

    switch (type) {
        case "number":
            code = "simpleradio.on('" + type + "', ( num, info ) => {\n" + generator.statementToCode(block, 'CODE') + '});\n';
            break;
        case "string":
            code = "simpleradio.on('" + type + "', ( str, info ) => {\n" + generator.statementToCode(block, 'CODE') + '});\n';
            break;
        case "keyvalue":
            code = "simpleradio.on('" + type + "', ( key, value, info ) => {\n" + generator.statementToCode(block, 'CODE') + '});\n';
            break;
        default:
            break;
    }
    return code;
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

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_values'] = function (block: BlockSvg, generator: CodeGenerator) {
    var type = block.getFieldValue('TYPE');
    var code = type

    return [code, Order.NONE];
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

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_info'] = function (block: BlockSvg, generator: CodeGenerator) {
    var type = block.getFieldValue('TYPE');
    var code = 'info.' + type;

    return [code, Order.NONE];
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
        this.appendDummyInput('')
            .appendField('Adress');

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, String);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_adress'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.adress()';

    return [code, Order.NONE];
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
        this.appendDummyInput('')
            .appendField('Group');

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, Number);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_group'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.group()';

    return [code, Order.NONE];
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
        this.appendDummyInput('')
            .appendField('Set group');
        this.appendValueInput("GROUP")
            .appendField("  group:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_setgroup'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.setGroup(' + generator.valueToCode(block, 'GROUP', 0) + ');\n';
    return code;
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
        this.appendDummyInput('')
            .appendField('End');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_end'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'simpleradio.end();\n';
    return code;
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


        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["SimpleRadio"]);
    }
}

javascriptGenerator.forBlock['simpleradio_off'] = function (block: BlockSvg, generator: CodeGenerator) {
    var type = block.getFieldValue('TYPE');
    var code = "simpleradio.off('" + type + "');\n";

    return code;
}