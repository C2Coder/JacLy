import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";


// !PulseCounter !import
addItemToToolbox(toolbox, "PulseCounter",
    {
        kind: "block",
        type: "pulsecounter_import",
    },
);

Blocks['pulsecounter_import'] = {
    init: function () {
        dummy(this, 'Import PulseCounter');
        inline(this);
        color(this, "PulseCounter");
    }
}

jsg.forBlock['pulsecounter_import'] = function (b: Block, g: JsG) {
    return "import * as pulsecounter from 'pulsecounter';\n"
}