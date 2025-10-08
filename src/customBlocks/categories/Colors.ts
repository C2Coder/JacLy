import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

// Colors import
addItemToToolbox(toolbox, "Colors",
    {
        kind: "block",
        type: "colors_import",
    },
);

Blocks['colors_import'] = {
    init: function () {
        dummy(this, 'Import Colors');
        inline(this);
        color(this, "Colors");
    }
}

jsg.forBlock['colors_import'] = function (b: Block, g: JsG) {
    return "import * as colors from './libs/colors.js';\n";
}