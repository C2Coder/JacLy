import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";
// GridUI import
addItemToToolbox(toolbox, "GridUI",
    {
        kind: "block",
        type: "gridui_import",
    },
);

Blockly.Blocks['gridui_import'] = {
    init: function () {
        this.setColour(colors["GridUI"]);
        dummy(this, 'Import GridUI');
        inline(this);
        color(this, "GridUI");
    }
}

javascriptGenerator.forBlock['gridui_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as gridui from 'gridui';\n"
    return code;
}
