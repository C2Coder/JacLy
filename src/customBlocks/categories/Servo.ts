import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// Servo import
addItemToToolbox(toolbox, "Servo",
    {
        kind: "block",
        type: "servo_import",
    },
);

Blockly.Blocks['servo_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import Servo');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Servo"]);
    }
}

javascriptGenerator.forBlock['servo_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as servo from './libs/servo.js';\n"
    return code;
}
