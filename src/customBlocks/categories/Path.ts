import { Block, Blocks, FieldDropdown } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, getVal, getField, getStatement } from "../customBlocks";

// !Path !import
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        type: "path_import",
    },
);

Blocks['path_import'] = {
    init: function () {
        dummy(this, 'Import Path');
        inline(this);
        color(this, "Path");
    }
}

jsg.forBlock['path_import'] = function (b: Block, g: JsG) {
    return "import * as path from 'path';\n"
}


// Path normalize
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        blockxml:
            '    <block type="path_normalize">\n' +
            '      <value name="path">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blocks['path_normalize'] = {
    init: function () {
        dummy(this, 'Normalize Path');
        value(this, "path", "  path:");
        output(this, Boolean);
        color(this, "Path");
    }
}

jsg.forBlock['path_normalize'] = function (b: Block, g: JsG) {
    return ['path.normalize(' + getVal(g, b, 'path') + ')', Order.NONE];
}

// ---- //


// Path normalize
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        blockxml:
            '    <block type="path_dirname">\n' +
            '      <value name="path">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blocks['path_dirname'] = {
    init: function () {
        dummy(this, 'Path Directory Name');
        value(this, "path", "  path:");
        output(this, Boolean);
        color(this, "Path");
    }
}

jsg.forBlock['path_dirname'] = function (b: Block, g: JsG) {
    return ['path.dirname(' + getVal(g, b, 'path') + ')', Order.NONE];
}

// ---- //


// Path normalize
addItemToToolbox(toolbox, "Path",
    {
        kind: "block",
        blockxml:
            '    <block type="path_basename">\n' +
            '      <value name="path">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },

);

Blocks['path_basename'] = {
    init: function () {
        dummy(this, 'Path Basename');
        value(this, "path", "  path:");
        output(this, Boolean);
        color(this, "Path");

    }
}

jsg.forBlock['path_basename'] = function (b: Block, g: JsG) {
    return ['path.basename(' + getVal(g, b, 'path') + ')', Order.NONE];
}

// ---- //