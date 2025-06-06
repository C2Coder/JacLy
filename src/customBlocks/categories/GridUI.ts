import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";
// GridUI import
addItemToToolbox(toolbox, "GridUI",
    {
        kind: "block",
        type: "gridui_import",
    },
);

Blockly.Blocks['gridui_import'] = {
    init: function () {
        dummy(this, 'Import GridUI');
        inline(this);
        color(this, "GridUI");
    }
}

javascriptGenerator.forBlock['gridui_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import * as gridui from 'gridui';\n"
}
