import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, colors } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, getVal } from "../customBlocks";

// I2C import
addItemToToolbox(toolbox, "I2C",
    {
        kind: "block",
        type: "i2c_import",
    },
);

Blockly.Blocks['i2c_import'] = {
    init: function () {
        dummy(this, 'Import I2C');
        inline(this);
        color(this, "I2C");
    }
}

javascriptGenerator.forBlock['i2c_import'] = function (b: BlockSvg, g: CodeGenerator) {
    "import * as i2c from 'i2c';\n"
    return 
}

// GPIO digitalwrite
addItemToToolbox(toolbox, "I2C",
    {
        kind: "block",
        blockxml:
            '    <block type="i2c_find">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blockly.Blocks['i2c_find'] = {
    init: function () {
        dummy(this, 'Find I2C device');
        value(this, "PIN", "  pin:");
        output(this, null);
        color(this, "I2C");
    }
}

javascriptGenerator.forBlock['i2c_find'] = function (b: BlockSvg, g: CodeGenerator) {
    'i2c.find(' + getVal(g, b, 'PIN') + ');\n';
    return 
}

