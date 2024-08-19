import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// Basic console
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="console">\n' +
            '      <field name="TYPE">log</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['console'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .appendField("console")
            .appendField(new Blockly.FieldDropdown([["log", "log"], ["error", "error"], ["info", "info"], ["debug", "debug"]]), "TYPE");

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
};

javascriptGenerator.forBlock['console'] = function (block: BlockSvg, generator: CodeGenerator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_text = generator.valueToCode(block, "TEXT", 0);
    var code = `console.${dropdown_type}(${value_text});\n`;
    return code;
};

// ---- //

// Basic await

addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        type: "await",
    },
);

Blockly.Blocks['await'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('await');
        this.appendValueInput("CODE")
            .setCheck(Function)

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['await'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'await ' + generator.valueToCode(block, 'CODE', 0) + ';\n'
    return code;
}

// ---- //

// Basic sleep
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
            .appendField('sleep');
        this.appendValueInput("TIME")
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField("ms:")

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, Function);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['sleep'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'sleep(' + generator.valueToCode(block, 'TIME', 0) + ')'
    return [code, Order.VOID];
}

// ---- //

// Basic raw code
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

// Basic comment
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
        this.setColour(colors["Basic_gray"]);
    }
}

javascriptGenerator.forBlock['comment'] = function (block: BlockSvg, generator: CodeGenerator) {
    return '// ' + generator.valueToCode(block, 'COMMENT', 0).replaceAll("'", "") + '\n';
}

// ---- //

// Loops set interval

addItemToToolbox(toolbox, "Basic",
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
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['set_interval'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = '\nvar ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + 'Interval = setInterval(function(){\n' + generator.statementToCode(block, 'CODE') + '}, ' + generator.valueToCode(block, 'INTERVAL', 0) + ');\n';
    return code;
}

// ---- //

// Basic clear interval
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="clear_interval">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['clear_interval'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('clearInterval')
        this.appendValueInput("NAME")
            .appendField("  name:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['clear_interval'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'clearInterval(' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + 'Interval);\n';
    return code;
}

// ---- //

// Loops set interval
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="set_timeout">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TIMEOUT">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1000</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['set_timeout'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('setTimeout')
        this.appendValueInput("NAME")
            .appendField("  name:")
        this.appendStatementInput("CODE")
            .appendField("do");
        this.appendValueInput("TIMEOUT")
            .appendField("ms: ")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['set_timeout'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = '\nvar ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + 'Timeout = setTimeout(function(){\n' + generator.statementToCode(block, 'CODE') + '}, ' + generator.valueToCode(block, 'TIMEOUT', 0) + ');\n';
    return code;
}

// ---- //

// Basic clear timeout
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="clear_timeout">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['clear_timeout'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('clearTimeout')
        this.appendValueInput("NAME")
            .appendField("  name:")

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Basic"]);
    }
}

javascriptGenerator.forBlock['clear_timeout'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'clearTimeout(' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + 'Timeout);\n';
    return code;
}