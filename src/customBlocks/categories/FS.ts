import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

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

javascriptGenerator.forBlock['fs_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import * as fs from 'fs';\n";
}