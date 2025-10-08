import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";


// Readline import
addItemToToolbox(toolbox, "Readline",
    {
        kind: "block",
        type: "readline_import",
    },
);

Blocks['readline_import'] = {
    init: function () {
        dummy(this, 'Import Readline');
        inline(this);
        color(this, "Readline");
    }
}

jsg.forBlock['readline_import'] = function (b: Block, g: JsG) {
    return "import * as readline from './libs/readline.js';\n"
}