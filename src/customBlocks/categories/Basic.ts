import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox } from "../toolbox";
import { addItemToToolbox, dummy, value, inline, output, color, dropdown, statement, getVal, getField, getStatement } from "../customBlocks";
import { stat } from "fs";

// Basic console
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="console">\n' +
            '      <field name="TYPE">log</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['console'] = {
    init: function () {
        dropdown(this, "TYPE", "console", [["log", "log"], ["error", "error"], ["info", "info"], ["debug", "debug"]]);
        value(this, "TEXT", "");
        inline(this);
        color(this, "Basic");
    }
};

javascriptGenerator.forBlock['console'] = function (b: BlockSvg, g: CodeGenerator) {
    return `console.${getField(b, "TYPE")}(${getVal(g, b, "TEXT")});\n`;
};

// ---- //

// Basic await

addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        type: "await",
    },
);

Blockly.Blocks['await'] = {
    init: function () {
        dummy(this, 'Await');
        statement(this, "CODE", "  code:");
        inline(this);
        color(this, "Basic");
    }
}

javascriptGenerator.forBlock['await'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'await ' + getStatement(g, b, "CODE") + ';\n';
}

// ---- //

// Basic sleep
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="sleep">\n' +
            '      <value name="TIME">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="num">100</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['sleep'] = {
    init: function () {
        dummy(this, 'Sleep');
        this.appendValueInput("TIME")
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField("ms:")
        output(this, Function);
        color(this, "Basic");
    }
}

javascriptGenerator.forBlock['sleep'] = function (b: BlockSvg, g: CodeGenerator) {
    return ['sleep(' + getVal(g, b, 'TIME') + ')', Order.VOID];
}

// ---- //

// Basic raw code
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="raw_code">\n' +
            '      <value name="CODE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['raw_code'] = {
    init: function () {
        value(this, "CODE", "");
        inline(this);
        color(this, "Basic_gray");
    }
}

javascriptGenerator.forBlock['raw_code'] = function (b: BlockSvg, g: CodeGenerator) {
    return getVal(g, b, 'CODE').replaceAll("'", "") + '\n';
}

// ---- //

// Basic comment
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="comment">\n' +
            '      <value name="COMMENT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text"></field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['comment'] = {
    init: function () {
        value(this, 'COMMENT', '  //');
        inline(this);
        color(this, "Basic_gray");
    }
}

javascriptGenerator.forBlock['comment'] = function (b: BlockSvg, g: CodeGenerator) {
    return '// ' + g.valueToCode(b, 'COMMENT', 0).replaceAll("'", "") + '\n';
}

// ---- //

// Loops set interval

addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="set_interval">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="INTERVAL">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1000</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['set_interval'] = {
    init: function () {

        dummy(this, 'Set interval');
        value(this, "NAME", "  name:");
        statement(this, "CODE", "  do:");
        value(this, "INTERVAL", "  ms:");
        inline(this);
        color(this, "Basic");
    }
}

javascriptGenerator.forBlock['set_interval'] = function (b: BlockSvg, g: CodeGenerator) {
    return '\nvar ' + getVal(g, b, 'NAME').replaceAll("'", "") + 'Interval = setInterval(function(){\n' + getStatement(g, b, "CODE") + '}, ' + getVal(g, b, 'INTERVAL') + ');\n';
}

// ---- //

// Basic clear interval
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="clear_interval">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['clear_interval'] = {
    init: function () {
        dummy(this, 'Clear interval');
        value(this, "NAME", "  name:");
        inline(this);
        color(this, "Basic");
    }
}

javascriptGenerator.forBlock['clear_interval'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'clearInterval(' + getVal(g, b, 'NAME').replaceAll("'", "") + 'Interval);\n';
}

// ---- //

// Loops set interval
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="set_timeout">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TIMEOUT">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1000</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['set_timeout'] = {
    init: function () {
        dummy(this, 'Set timeout');
        value(this, "NAME", "  name:");
        statement(this, "CODE", "  do:");
        value(this, "TIMEOUT", "  ms:");
        inline(this);
        color(this, "Basic");
    }
}

javascriptGenerator.forBlock['set_timeout'] = function (b: BlockSvg, g: CodeGenerator) {
    return '\nvar ' + getVal(g, b, 'NAME').replaceAll("'", "") + 'Timeout = setTimeout(function(){\n' + getStatement(g, b, 'CODE') + '}, ' + getVal(g, b, 'TIMEOUT') + ');\n';
}

// ---- //

// Basic clear timeout
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="clear_timeout">\n' +
            '      <value name="NAME">\n' +
            '        <shadow type="text">\n' +
            '          <field name="text">abc</field>\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blockly.Blocks['clear_timeout'] = {
    init: function () {
        dummy(this, 'Clear timeout');
        value(this, "NAME", "  name:");
        inline(this);
        color(this, "Basic");
    }
}

javascriptGenerator.forBlock['clear_timeout'] = function (b: BlockSvg, g: CodeGenerator) {
    return 'clearTimeout(' + g.valueToCode(b, 'NAME', 0).replaceAll("'", "") + 'Timeout);\n';;
}