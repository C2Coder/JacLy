import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs, dummy, value, inline, output, color } from "../customBlocks";

// WiFi import
addItemToToolbox(toolbox, "WiFi",
    {
        kind: "block",
        type: "wifi_import",
    },
);

Blockly.Blocks['wifi_import'] = {
    init: function () {
        dummy(this, 'Import WiFi');
        inline(this);
        color(this, "WiFi");
    }
}

javascriptGenerator.forBlock['wifi_import'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "import * as wifi from 'wifi';\n"
    return code;
}

// ---- //

// WiFi currentip

addItemToToolbox(toolbox, "WiFi",
    {
        kind: "block",
        type: "wifi_currentip",
    },
);

Blockly.Blocks['wifi_currentip'] = {
    init: function () {
        dummy(this, 'Get Current IP');
        output(this);
        color(this, "WiFi");
    }
}

javascriptGenerator.forBlock['wifi_currentip'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'wifi.currentIP()';

    return [code, Order.NONE];
}