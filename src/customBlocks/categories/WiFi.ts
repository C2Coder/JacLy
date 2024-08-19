import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, cfg_inlineInputs } from "../customBlocks";

// WiFi import
addItemToToolbox(toolbox, "WiFi",
    {
        kind: "block",
        type: "wifi_import",
    },
);

Blockly.Blocks['wifi_import'] = {
    init: function () {
        this.appendDummyInput('')
            .appendField('Import WiFi');

        this.setInputsInline(cfg_inlineInputs);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(colors["WiFi"]);
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
        this.appendDummyInput('')
            .appendField('Current IP');

        this.setInputsInline(cfg_inlineInputs);
        this.setOutput(true, String);
        this.setColour(colors["WiFi"]);
    }
}

javascriptGenerator.forBlock['wifi_currentip'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'wifi.currentIP()';

    return [code, Order.NONE];
}