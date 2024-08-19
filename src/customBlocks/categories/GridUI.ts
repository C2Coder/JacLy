import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// GridUI import
addItemToToolbox(toolbox, "GridUI",
    {
        kind: "block",
        type: "gridui_import",
    },
);

Blockly.Blocks['gridui_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import GridUI');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["GridUI"]);
    }
}

javascriptGenerator.forBlock['gridui_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as gridui from 'gridui';\n"
    return code;
}
