import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";
// GridUI import
addItemToToolbox(toolbox, "GridUI",
    {
        kind: "block",
        type: "gridui_import",
    },
);

Blocks['gridui_import'] = {
    init: function () {
        dummy(this, 'Import GridUI');
        inline(this);
        color(this, "GridUI");
    }
}

jsg.forBlock['gridui_import'] = function (b: Block, g: JsG) {
    return "import * as gridui from 'gridui';\n"
}
