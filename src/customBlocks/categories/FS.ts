import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";


// FS import
addItemToToolbox(toolbox, "FS",
    {
        kind: "block",
        type: "fs_import",
    },
);

Blockly.Blocks['fs_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import FS');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["FS"]);
    }
}

javascriptGenerator.forBlock['fs_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as fs from 'fs';\n"
    return code;
}