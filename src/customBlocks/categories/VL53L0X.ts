import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getVal, getField, getStatement } from "../customBlocks";


// VL53L0X import
addItemToToolbox(toolbox, "VL53L0X",
    {
        kind: "block",
        type: "vl53l0x_import",
    },
);

Blockly.Blocks['vl53l0x_import'] = {
    init: function () {
        dummy(this, 'Import VL53L0X');
        inline(this);
        color(this, "VL53L0X");
    }
}

javascriptGenerator.forBlock['vl53l0x_import'] = function (b: BlockSvg, g: CodeGenerator) {
    return "import { I2C1 } from 'i2c';\n" +
           "import { VL53L0X } from './libs/VL53L0X.js';\n";
}

// ---- //

// VL53L0X create
addItemToToolbox(toolbox, "VL53L0X",
    {
        kind: "block",
        type: "vl53l0x_create",
    },
);

Blockly.Blocks['vl53l0x_create'] = {
    init: function () {
        dummy(this, 'Create vl53l0x');
        inline(this);
        color(this, "VL53L0X");
    }
}

javascriptGenerator.forBlock['vl53l0x_create'] = function (b: BlockSvg, g: CodeGenerator) {
    return "I2C1.setup({sda: robutek.Pins.SDA, scl: robutek.Pins.SCL, bitrate: 400000});\n" +
           "const vl = new VL53L0X(I2C1);\n";
}

// ---- //

// VL53L0X get measurement
addItemToToolbox(toolbox, "VL53L0X",
    {
        kind: "block",
        type: "vl53l0x_read",
    },
);

Blockly.Blocks['vl53l0x_read'] = {
    init: function () {
        dummy(this, 'Read vl53l0x');
        inline(this);
        color(this, "VL53L0X");
    }
}

javascriptGenerator.forBlock['vl53l0x_read'] = function (b: BlockSvg, g: CodeGenerator) {
    return "const m = await vl.read();\n";
}

// ---- //

// VL53L0X Measurement
addItemToToolbox(toolbox, "VL53L0X",
    {
        kind: "block",
        type: "vl53l0x_measurement",
    },
);

Blockly.Blocks['vl53l0x_measurement'] = {
    init: function () {
        this.appendDummyInput('').appendField('m.')
            .appendField(new Blockly.FieldDropdown([["distance", "distance"],
            ["signalRate", "signalRate"],
            ["ambientRate", "ambientRate"],
            ["effectiveSpadRtnCount", "effectiveSpadRtnCount"]]), "POS");

        output(this, Number);
        color(this, "VL53L0X");
    }
}

javascriptGenerator.forBlock['vl53l0x_measurement'] = function (b: BlockSvg, g: CodeGenerator) {
    var pos = getField(b, 'POS');
    return ["m." + pos, Order.ATOMIC];
}