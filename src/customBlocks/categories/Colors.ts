import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// Colors import
addItemToToolbox(toolbox, "Colors",
    {
        kind: "block",
        type: "colors_import",
    },
);

Blockly.Blocks['colors_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import Colors');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Colors"]);
    }
}

javascriptGenerator.forBlock['colors_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as colors from './libs/colors.js';\n"
    return code;
}