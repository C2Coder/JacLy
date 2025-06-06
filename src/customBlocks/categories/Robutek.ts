import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";


// Robutek import
addItemToToolbox(toolbox, "Robutek",
    {
        kind: "block",
        type: "robutek_import",
    },
);

Blockly.Blocks['robutek_import'] = {
    init: function () {
        dummy(this, 'Import Robutek');
        inline(this);
        color(this, "Robutek");
    }
}

javascriptGenerator.forBlock['robutek_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import * as robutek from './libs/robutek.js';\n"
}