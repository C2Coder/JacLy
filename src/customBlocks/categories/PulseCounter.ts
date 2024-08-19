import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// !PulseCounter !import
addItemToToolbox(toolbox, "PulseCounter",
    {
        kind: "block",
        type: "pulsecounter_import",
    },
);

Blockly.Blocks['pulsecounter_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import PulseCounter');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["PulseCounter"]);
    }
}

javascriptGenerator.forBlock['pulsecounter_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as pulsecounter from 'pulsecounter';\n"
    return code;
}