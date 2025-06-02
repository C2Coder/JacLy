import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";


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

javascriptGenerator.forBlock['motor_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as motor from 'motor';\n"
    return code;
}