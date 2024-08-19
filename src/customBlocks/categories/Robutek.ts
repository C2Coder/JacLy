import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// Robutek import
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        type: "robutek_import",
    },
);

Blockly.Blocks['robutek_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import Robutek');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["Robutek"]);
    }
}

javascriptGenerator.forBlock['robutek_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as robutek from './libs/robutek.js';\n"
    return code;
}