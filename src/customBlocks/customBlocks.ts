import Blockly, { BlockSvg, FieldColour, FieldTextInput } from "blockly";
// import 'blockly/javascript';
import { javascriptGenerator } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { registerFieldColour } from '@blockly/field-colour';

// ========== Logic ==========
// ========== Loops ==========

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

// ========== Math ==========

// ========== Text ==========

// ========== Lists ==========

// ========== Colour ==========

// ========== Basic ==========

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
    var code = 'await sleep(' + generator.valueToCode(block, 'ID', 0) + ')\n'
    return code;
}

// ---- //

Blockly.Blocks['console'] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("console")
            .appendField(new Blockly.FieldDropdown([["log", "log"], ["error", "error"], ["info", "info"], ["debug", "debug"]]), "type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(128);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascriptGenerator.forBlock['console'] = function (block: BlockSvg, generator: CodeGenerator) {
    var dropdown_type = block.getFieldValue('type');
    //var value_text = block.getFieldValue('text');
    var value_text = generator.valueToCode(block, "text", 0);
    var code = `console.${dropdown_type}(${value_text});\n`;
    return code;
};

// ---- //

Blockly.Blocks['raw_code'] = {
    init: function () {
        this.appendDummyInput('abcd')
            .appendField('code')
            .appendField(new Blockly.FieldTextInput(), 'code');
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

// ========== Smartled ==========

Blockly.Blocks['smartled_init'] = {
    init: function () {
        this.appendDummyInput('abcd')
            .appendField('Load smartled');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(259);
    }
}

javascriptGenerator.forBlock['smartled_init'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = 'import { SmartLed, LED_WS2812, LED_WS2812B, LED_WS2812B_2020, LED_SK6812, LED_WS2813 } from "smartled";\n'
    +'const HSVtoRgb = (c) => ( i = Math.floor(c.h * 6), f = c.h * 6 - i, p = c.v * (1 - c.s), q = c.v * (1 - f * c.s), t = c.v * (1 - (1 - f) * c.s), {r: Math.round([c.v, q, p, p, t, c.v][i % 6] * 255), g: Math.round([t, c.v, c.v, q, p, p][i % 6] * 255), b: Math.round([p, p, t, c.v, c.v, q][i % 6] * 255)});\n'
    +'const HEXtoRgb = hex => ((result = hex.replace("#", "").match(/.{1,2}/g)), {r: parseInt(result[0], 16), g: parseInt(result[1], 16), b: parseInt(result[2], 16)});\n\n'
    return code;
}

// ---- //

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

// ---- //

Blockly.Blocks['set_hex'] = {
    init: function () {
        this.appendDummyInput('abcd')
            .appendField('set hex');
        this.appendValueInput('NAME')
            .appendField('  name:');
        this.appendValueInput('COLOR')
            .appendField('  color:');
        this.appendValueInput('INDEX')
            .appendField('  index:')
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

// ---- //

Blockly.Blocks['set_hsv'] = {
    init: function () {
        this.appendDummyInput('abcd')
            .appendField('set hsv');
        this.appendValueInput('NAME')
            .appendField('  name:');
        this.appendValueInput('INDEX')
            .appendField('  index:');
        this.appendValueInput('HUE')
            .appendField('  H (0-360):')
        this.appendValueInput('SATURATION')
            .appendField('  S (0-256):')
        this.appendValueInput('VALUE')
            .appendField('  V (0-256):')
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(259);
    }
}

javascriptGenerator.forBlock['set_hsv'] = function (block: BlockSvg, generator: CodeGenerator) {
    var code = generator.valueToCode(block, 'NAME', 0).replaceAll("'", "")
    + '.set(' + generator.valueToCode(block, 'INDEX', 0) 
    + ', HSVtoRgb({h: ' + Math.min(Number(generator.valueToCode(block, 'HUE', 0)), 360) + '/360, s: ' 
    + Math.min(Number(generator.valueToCode(block, 'SATURATION', 0)), 256) + '/256, v: '
    + Math.min(Number(generator.valueToCode(block, 'VALUE', 0)), 256) + '/256}));\n';
    return code;
}

// ---- //

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

// ---- //


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

// ---- //

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

// ========== Custom Button ==========
// ========== Variables ==========
// ========== Functions ==========





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
