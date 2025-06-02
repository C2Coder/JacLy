import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";


// !PulseCounter !import
addItemToToolbox(toolbox, "PulseCounter",
    {
        kind: "block",
        type: "pulsecounter_import",
    },
);

Blockly.Blocks['pulsecounter_import'] = {
    init: function () {
        dummy(this, 'Import PulseCounter');
        inline(this);
        color(this, "PulseCounter");
    }
}

javascriptGenerator.forBlock['pulsecounter_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as pulsecounter from 'pulsecounter';\n"
    return code;
}