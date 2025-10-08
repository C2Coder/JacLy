import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";


// !Motor !import
addItemToToolbox(toolbox, "Motor",
    {
        kind: "block",
        type: "motor_import",
    },
);

Blocks['motor_import'] = {
    init: function () {
        dummy(this, 'Import Motor');
        inline(this);
        color(this, "Motor");
    }
}

jsg.forBlock['motor_import'] = function (b: Block, g: JsG) {
    return "import * as motor from 'motor';\n"
}