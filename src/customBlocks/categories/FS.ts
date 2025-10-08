import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

// FS import
addItemToToolbox(toolbox, "FS",
    {
        kind: "block",
        type: "fs_import",
    },
);

Blocks['fs_import'] = {
    init: function () {
        dummy(this, 'Import FS');
        inline(this);
        color(this, "FS");
    }
}

jsg.forBlock['fs_import'] = function (b: Block, g: JsG) {
    return "import * as fs from 'fs';\n";
}