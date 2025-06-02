import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";


// Readline import
addItemToToolbox(toolbox, "Readline",
    {
        kind: "block",
        type: "readline_import",
    },
);

Blockly.Blocks['readline_import'] = {
    init: function () {
        dummy(this, 'Import Readline');
        inline(this);
        color(this, "Readline");
    }
}

javascriptGenerator.forBlock['readline_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as readline from './libs/readline.js';\n"
    return code;
}