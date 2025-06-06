import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

// Colors import
addItemToToolbox(toolbox, "Colors",
    {
        kind: "block",
        type: "colors_import",
    },
);

Blockly.Blocks['colors_import'] = {
    init: function () {
        dummy(this, 'Import Colors');
        inline(this);
        color(this, "Colors");
    }
}

javascriptGenerator.forBlock['colors_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import * as colors from './libs/colors.js';\n";
}