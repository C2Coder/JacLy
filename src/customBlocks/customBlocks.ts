import Blockly, { BlockSvg, FieldColour, FieldTextInput } from "blockly";
// import 'blockly/javascript';
import { javascriptGenerator } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import {registerFieldColour} from '@blockly/field-colour';


// Blockly.Blocks['console_log'] = {
//     init: function() {
//         this.appendValueInput("MESSAGE")
//             .setCheck(null)
//             .appendField("Console.log");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(160);
//         this.setTooltip("dd");
//         this.setHelpUrl("");
//     }
// };
//
// javascriptGenerator.forBlock['console_log'] = function(block: BlockSvg, generator: CodeGenerator) {
//     var code = 'console.log(' + generator.valueToCode(block, 'MESSAGE', 0) + ');\n';
//     return code;
// };

Blockly.Blocks['console'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck(null)
            .appendField("console.")
            .appendField(new Blockly.FieldDropdown([["log", "log"], ["error", "error"], ["info", "info"], ["debug", "debug"]]), "TYPE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Console....");
        this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/console");
    }
};

javascriptGenerator.forBlock['console'] = function (block: BlockSvg, generator: CodeGenerator) {
    var dropdown_type = block.getFieldValue('TYPE');
    var value_text = generator.valueToCode(block, 'TEXT', 0);
    var code = `console.${dropdown_type}(${value_text});\n`;
    return code;
};

// ========== INTERVAL ==========

Blockly.Blocks['set_interval'] = {
    init: function () {
        this.appendValueInput("INTERVAL")
            .setCheck(null)
            .appendField("setInterval");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['set_interval'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'setInterval(function(){\n' + generator.statementToCode(block, 'CODE') + '}, ' + generator.valueToCode(block, 'INTERVAL', 0) + ');\n';
    return code;
}

// ========== BASIC ==========

Blockly.Blocks['sleep'] = {
    init: function () {
        this.appendValueInput("TIME")
            .setCheck(null)
            .appendField("await.sleep(ms)   ms =")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(128);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['sleep'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'await.sleep(' + generator.valueToCode(block, 'ID', 0) + ')\n'

    return code;
}

Blockly.Blocks['async_func'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("async function")
        this.appendStatementInput("CODE")
            .setCheck(null)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['async_func'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'async function ' + generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '(){\n' + generator.statementToCode(block, 'CODE') + '};\n';
    return code;
}


Blockly.Blocks['call_func'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("call function")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['call_func'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "") + '();\n';
    return code;
}


Blockly.Blocks['raw_code'] = {
    init: function() {
        this.appendDummyInput('abc')
          .appendField('code')
          .appendField(new Blockly.FieldTextInput('default'), 'code');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour("#888");
      }
}   

javascriptGenerator.forBlock['raw_code'] = function (block: BlockSvg, generator: CodeGenerator) {
    return block.getFieldValue('code') + '\n';
}


// ========== SMARTLEDS ==========

Blockly.Blocks['smartled_init'] = {
    init: function () {
        this.appendDummyInput('NAME')
            .appendField('Load smartled');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(259);
    }
}

javascriptGenerator.forBlock['smartled_init'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = '\nimport { SmartLed, LED_WS2812, LED_WS2812B, LED_WS2812B_2020, LED_SK6812, LED_WS2813 } from "smartled";\nfunction HEXtoRgb(hex) {\n    var result = hex.replace("#", "").match(/.{1,2}/g);\n    return {r:parseInt(result[0], 16), g:parseInt(result[1], 16), b:parseInt(result[2], 16)}\n}\nfunction HSVtoRgb(h, s, v) {\n    var r, g, b, i, f, p, q, t;if (arguments.length === 1) {s = h.s, v = h.v, h = h.h;}i = Math.floor(h * 6);f = h * 6 - i;p = v * (1 - s);q = v * (1 - f * s);t = v * (1 - (1 - f) * s);switch (i % 6) {case 0: r = v, g = t, b = p; break;case 1: r = q, g = v, b = p; break;case 2: r = p, g = v, b = t; break;case 3: r = p, g = q, b = v; break;case 4: r = t, g = p, b = v; break;case 5: r = v, g = p, b = q; break;}\n    return {r: Math.round(r * 255),g: Math.round(g * 255),b: Math.round(b * 255)};\n}\n';
    return code;
}


Blockly.Blocks['create_strip'] = {
    init: function () {
        this.appendDummyInput('abcd')
            .appendField('create strip')
        this.appendDummyInput('abcd')
            .appendField('  name:')
            .appendField(new Blockly.FieldTextInput("ledStrip"), 'name')
            .appendField('  pin:')
            .appendField(new Blockly.FieldNumber(0), 'pin')
            .appendField('  count:')
            .appendField(new Blockly.FieldNumber(0), 'count')
            .appendField(' type:')
            .appendField(new Blockly.FieldDropdown([
                ['LED_WS2812', 'LED_WS2812'],
                ['LED_WS2812B', 'LED_WS2812B'],
                ['LED_WS2812B_2020', 'LED_WS2812B_2020'],
                ['LED_SK6812', 'LED_SK6812'],
                ['LED_WS2813', 'LED_WS2813']
            ]), 'type');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(259);
    }
}

javascriptGenerator.forBlock['create_strip'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = "\nlet " + block.getFieldValue('name') + ' = new SmartLed(' + block.getFieldValue('pin') + ', ' + block.getFieldValue('count') + ', ' + block.getFieldValue('type') + ');\n\n';
    return code;
}



registerFieldColour();
Blockly.Blocks['set_hex'] = {
    init: function() {
        this.appendDummyInput('abc')
          .appendField('set hex');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(259);
      }
}

javascriptGenerator.forBlock['set_hex'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'strip_' + generator.valueToCode(block, 'ID', 0) + '.set(' + generator.valueToCode(block, 'INDEX', 0) + ', HEXtoRgb(' + generator.valueToCode(block, 'COLOR', 0) + '));\n';
    return code;
}

Blockly.Blocks['set_hsv'] = {
    init: function () {
        this.appendValueInput("ID")
            .setCheck(null)
            .appendField("set hsv")
            .appendField("  id =")
        this.appendValueInput("INDEX")
            .setCheck(null)
            .appendField("          index =");
        this.appendValueInput("H")
            .setCheck(null)
            .appendField("                 H =");
        this.appendValueInput("S")
            .setCheck(null)
            .appendField("                  S =");
        this.appendValueInput("V")
            .setCheck(null)
            .appendField("                  V =");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['set_hsv'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'strip_' + generator.valueToCode(block, 'ID', 0) + '.set(' + generator.valueToCode(block, 'INDEX', 0) + ', HSVtoRgb(' + generator.valueToCode(block, 'H', 0) + '/360, ' + generator.valueToCode(block, 'S', 0) + '/256, ' + generator.valueToCode(block, 'V', 0) + '/256));\n';
    return code;
}


Blockly.Blocks['set_rgb'] = {
    init: function () {
        this.appendValueInput("ID")
            .setCheck(null)
            .appendField("set rgb")
            .appendField("  id =")
        this.appendValueInput("INDEX")
            .setCheck(null)
            .appendField("          index =");
        this.appendValueInput("R")
            .setCheck(null)
            .appendField("                 R =");
        this.appendValueInput("G")
            .setCheck(null)
            .appendField("                 G =");
        this.appendValueInput("B")
            .setCheck(null)
            .appendField("                 B =");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['set_rgb'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'strip_' + generator.valueToCode(block, 'ID', 0) + '.set(' + generator.valueToCode(block, 'INDEX', 0) + ', {r:' + generator.valueToCode(block, 'R', 0) + ', g:' + generator.valueToCode(block, 'G', 0) + ', b:' + generator.valueToCode(block, 'B', 0) + '});\n';
    return code;
}


Blockly.Blocks['strip_clear'] = {
    init: function () {
        this.appendValueInput("ID")
            .setCheck(null)
            .appendField("clear")
            .appendField("  id =")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['strip_clear'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'strip_' + generator.valueToCode(block, 'ID', 0) + '.clear();\n'
    return code;
}

Blockly.Blocks['strip_show'] = {
    init: function () {
        this.appendValueInput("ID")
            .setCheck(null)
            .appendField("show")
            .appendField("  id =")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(259);
        this.setTooltip("dd");
        this.setHelpUrl("");
    }
}

javascriptGenerator.forBlock['strip_show'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'strip_' + generator.valueToCode(block, 'ID', 0) + '.show();\n'
    return code;
}