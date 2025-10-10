import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

// WiFi import
addItemToToolbox(toolbox, "WiFi",
    {
        kind: "block",
        type: "wifi_import",
    },
);

Blocks['wifi_import'] = {
    init: function () {
        dummy(this, 'Import WiFi');
        inline(this);
        color(this, "WiFi");
    }
}

jsg.forBlock['wifi_import'] = function (b: Block, g: JsG) {
    return "import * as wifi from 'wifi';\n";
}

// ---- //

// WiFi currentip

addItemToToolbox(toolbox, "WiFi",
    {
        kind: "block",
        type: "wifi_currentip",
    },
);

Blocks['wifi_currentip'] = {
    init: function () {
        dummy(this, 'Get Current IP');
        output(this, null);
        color(this, "WiFi");
    }
}

jsg.forBlock['wifi_currentip'] = function (b: Block, g: JsG) {
    return ['wifi.currentIP()', Order.NONE];
}