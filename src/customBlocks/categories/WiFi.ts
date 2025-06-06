import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

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

javascriptGenerator.forBlock['wifi_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import * as wifi from 'wifi';\n"
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
        output(this, String);
        color(this, "WiFi");
    }
}

javascriptGenerator.forBlock['wifi_currentip'] = function (b: BlockSvg, g: CodeGenerator) {
    return ['wifi.currentIP()', Order.NONE];
}