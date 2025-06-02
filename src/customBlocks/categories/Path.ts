import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// !Path !import
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        type: "path_import",
    },
);

Blockly.Blocks['path_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import Path');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Path"]);
    }
}

javascriptGenerator.forBlock['path_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as path from 'path';\n"
    return code;
}


// Path normalize
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        blockxml:
            '    <block type="path_normalize">\n' +
            '      <value name="path">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['path_normalize'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Normalize Path');
        this.appendValueInput("path")
            .appendField("  path:");

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, Boolean);
        this.setColour(colors["Path"]);
    }
}

javascriptGenerator.forBlock['path_normalize'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'path.normalize(' + generator.valueToCode(block, 'path', 0) + ')';
    return [code, Order.NONE];
}

// ---- //


// Path normalize
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        blockxml:
            '    <block type="path_dirname">\n' +
            '      <value name="path">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['path_dirname'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Path Directory Name');
        this.appendValueInput("path")
            .appendField("  path:");

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, Boolean);
        this.setColour(colors["Path"]);
    }
}

javascriptGenerator.forBlock['path_dirname'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'path.dirname(' + generator.valueToCode(block, 'path', 0) + ')';
    return [code, Order.NONE];
}

// ---- //


// Path normalize
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        blockxml:
            '    <block type="path_basename">\n' +
            '      <value name="path">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['path_basename'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Basename of Path');
        this.appendValueInput("path")
            .appendField("  path:");

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, Boolean);
        this.setColour(colors["Path"]);
    }
}

javascriptGenerator.forBlock['path_basename'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'path.basename(' + generator.valueToCode(block, 'path', 0) + ')';
    return [code, Order.NONE];
}

// ---- //