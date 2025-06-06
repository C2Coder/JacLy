import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";


// !Motor !import
addItemToToolbox(toolbox, "Motor",
    {
        kind: "block",
        type: "motor_import",
    },
);

Blockly.Blocks['motor_import'] = {
    init: function () {
        dummy(this, 'Import Motor');
        inline(this);
        color(this, "Motor");
    }
}

javascriptGenerator.forBlock['motor_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import * as motor from 'motor';\n"
}