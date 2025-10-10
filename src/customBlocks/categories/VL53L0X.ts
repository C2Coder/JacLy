import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getVal, getField, getStatement } from "../customBlocks";
import { NONAME } from "dns";


// VL53L0X import
addItemToToolbox(toolbox, "VL53L0X",
    {
        kind: "block",
        type: "vl53l0x_import",
    },
);

Blocks['vl53l0x_import'] = {
    init: function () {
        dummy(this, 'Import VL53L0X');
        inline(this);
        color(this, "VL53L0X");
    }
}

jsg.forBlock['vl53l0x_import'] = function (b, g) {
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

Blocks['vl53l0x_create'] = {
    init: function () {
        dummy(this, 'Create vl53l0x');
        inline(this);
        color(this, "VL53L0X");
    }
}

jsg.forBlock['vl53l0x_create'] = function (b, g) {
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

Blocks['vl53l0x_read'] = {
    init: function () {
        dummy(this, 'Read vl53l0x');
        inline(this);
        color(this, "VL53L0X");
    }
}

jsg.forBlock['vl53l0x_read'] = function (b, g) {
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

Blocks['vl53l0x_measurement'] = {
    init: function () {
        this.appendDummyInput('').appendField('m.')
            .appendField(new FieldDropdown([["distance", "distance"],
            ["signalRate", "signalRate"],
            ["ambientRate", "ambientRate"],
            ["effectiveSpadRtnCount", "effectiveSpadRtnCount"]]), "POS");

        output(this, null);
        color(this, "VL53L0X");
    }
}

jsg.forBlock['vl53l0x_measurement'] = function (b, g) {
    var pos = getField(b, 'POS');
    return ["m." + pos, Number(Order.ATOMIC)];
}