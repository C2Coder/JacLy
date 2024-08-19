import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// !Motor !import
addItemToToolbox(toolbox, "Motor",
    {
        kind: "block",
        type: "motor_import",
    },
);

Blockly.Blocks['motor_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import Motor');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Motor"]);
    }
}

javascriptGenerator.forBlock['motor_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as motor from 'motor';\n"
    return code;
}