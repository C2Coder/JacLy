import { Block, Blocks, inputs } from "blockly";
import { JavascriptGenerator as JsG, javascriptGenerator as jsg, Order } from "blockly/javascript";

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
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['console'] = {
    init: function () {
        dropdown(this, "TYPE", "console", [["log", "log"], ["error", "error"], ["info", "info"], ["debug", "debug"]]);
        value(this, "TEXT", "");
        inline(this);
        color(this, "Basic");
    }
};

jsg.forBlock['console'] = function (b: Block, g: JsG) {
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

Blocks['await'] = {
    init: function () {
        dummy(this, 'Await');
        statement(this, "CODE", "  code:");
        inline(this);
        color(this, "Basic");
    }
}

jsg.forBlock['await'] = function (b: Block, g: JsG) {
    const code = getStatement(g, b, "CODE");
    return code
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => 'await ' + line.trim())
        .join('\n') + '\n';
}

// ---- //

// Basic sleep
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="basic_sleep">\n' +
            '      <value name="TIME">\n' +
            '        <shadow type="math_number">\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['basic_sleep'] = {
    init: function () {
        value(this, "TIME", "Sleep ms:");
        inline(this);
        color(this, "Basic");
    }
}

jsg.forBlock['basic_sleep'] = function (b: Block, g: JsG) {
    return 'await sleep(' + getVal(g, b, 'TIME') + ');\n';
};

// ---- //

// Basic raw code
addItemToToolbox(toolbox, "Basic",
    {
        kind: "block",
        blockxml:
            '    <block type="raw_code">\n' +
            '      <value name="CODE">\n' +
            '        <shadow type="text">\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['raw_code'] = {
    init: function () {
        value(this, "CODE", "");
        inline(this);
        color(this, "Basic_gray");
    }
}

jsg.forBlock['raw_code'] = function (b: Block, g: JsG) {
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
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['comment'] = {
    init: function () {
        value(this, 'COMMENT', '  //');
        inline(this);
        color(this, "Basic_gray");
    }
}

jsg.forBlock['comment'] = function (b: Block, g: JsG) {
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
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="INTERVAL">\n' +
            '        <shadow type="math_number">\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['set_interval'] = {
    init: function () {

        dummy(this, 'Set interval');
        value(this, "NAME", "  name:");
        statement(this, "CODE", "  do:");
        value(this, "INTERVAL", "  ms:");
        inline(this);
        color(this, "Basic");
    }
}

jsg.forBlock['set_interval'] = function (b: Block, g: JsG) {
    return '\nvar ' + getVal(g, b, 'NAME').replaceAll("'", "") + 'Interval = setInterval(async function(){\n' + getStatement(g, b, "CODE") + '}, ' + getVal(g, b, 'INTERVAL') + ');\n';
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
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['clear_interval'] = {
    init: function () {
        dummy(this, 'Clear interval');
        value(this, "NAME", "  name:");
        inline(this);
        color(this, "Basic");
    }
}

jsg.forBlock['clear_interval'] = function (b: Block, g: JsG) {
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
            "        </shadow>\n" +
            "      </value>\n" +
            '      <value name="TIMEOUT">\n' +
            '        <shadow type="math_number">\n' +
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['set_timeout'] = {
    init: function () {
        dummy(this, 'Set timeout');
        value(this, "NAME", "  name:");
        statement(this, "CODE", "  do:");
        value(this, "TIMEOUT", "  ms:");
        inline(this);
        color(this, "Basic");
    }
}

jsg.forBlock['set_timeout'] = function (b: Block, g: JsG) {
    return '\nvar ' + getVal(g, b, 'NAME').replaceAll("'", "") + 'Timeout = setTimeout(async function(){\n' + getStatement(g, b, 'CODE') + '}, ' + getVal(g, b, 'TIMEOUT') + ');\n';
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
            "        </shadow>\n" +
            "      </value>\n" +
            "    </block>\n",
    },
);

Blocks['clear_timeout'] = {
    init: function () {
        dummy(this, 'Clear timeout');
        value(this, "NAME", "  name:");
        inline(this);
        color(this, "Basic");
    }
}

jsg.forBlock['clear_timeout'] = function (b: Block, g: JsG) {
    return 'clearTimeout(' + g.valueToCode(b, 'NAME', 0).replaceAll("'", "") + 'Timeout);\n';;
}