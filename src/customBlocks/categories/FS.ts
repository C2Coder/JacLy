import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";

// FS import
addItemToToolbox(toolbox, "FS",
    {
        kind: "block",
        type: "fs_import",
    },
);

Blockly.Blocks['fs_import'] = {
    init: function () {
        dummy(this, 'Import FS');
        inline(this);
        color(this, "FS");
    }
}

javascriptGenerator.forBlock['fs_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as fs from 'fs';\n"
    return code;
}