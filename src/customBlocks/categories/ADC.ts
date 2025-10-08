import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color } from "../customBlocks";

// ADC import
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        type: "adc_import",
    },
);

Blocks['adc_import'] = {
    init: function () {
        dummy(this, 'Import ADC');
        inline(this);
        color(this, "ADC");
    }
}

jsg.forBlock['adc_import'] = function (b: Block, g: JsG) {
    return  "import * as adc from 'adc';\n";
}

// ---- //

// ADC configure
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        blockxml:
            '    <block type="adc_configure">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n"
    }
);

Blocks['adc_configure'] = {
    init: function () {
        dummy(this, 'Configure ADC');
        value(this, "PIN", "  pin:");
        inline(this);
        color(this, "ADC");
    }
};

jsg.forBlock['adc_configure'] = function (b: Block, g: JsG) {
    return  'adc.configure(' + g.valueToCode(b, 'PIN', 0) + ');\n';
}

// ---- //

// ADC read
addItemToToolbox(toolbox, "ADC",
    {
        kind: "block",
        blockxml:
            '    <block type="adc_read">\n' +
            '      <value name="PIN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">0</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '    </block>\n',
    },
);

Blocks['adc_read'] = {
    init: function () {
        dummy(this, 'ADC read');
        value(this, "PIN", "  pin:");
        output(this, Number);
        color(this, "ADC");
    }
}

jsg.forBlock['adc_read'] = function (b: Block, g: JsG) {
    return ['adc.read(' + g.valueToCode(b, 'PIN', 0) + ')', Order.NONE];
}
