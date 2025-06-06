import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, Toolbox, ToolboxItem, CustomCategory, colors } from "./toolbox";


export function getField(_b:BlockSvg, name: string) {
    return _b.getFieldValue(name)
}

export function getVal(_g:CodeGenerator, _b:BlockSvg, name: string) {
    return _g.valueToCode(_b, name, 0)
}
export function getStatement(_g:CodeGenerator, _b:BlockSvg, name: string) {
    return _g.statementToCode(_b, name)
}


export function dummy(that: any, text: string) {
    that.appendDummyInput('')
        .appendField(text);
}

export function value(that: any, name: string, text: string) {
    that.appendValueInput(name)
        .appendField(text);
}

export function dropdown(that: any, name: string, text: string, options: Blockly.MenuGenerator) {
    if (text === undefined || text === null || text === "") {
        that.appendDummyInput(name)
            .appendField(new Blockly.FieldDropdown(options), name);
    }
    else {
        that.appendDummyInput(name)
        .appendField(text)
        .appendField(new Blockly.FieldDropdown(options), name);
    }
}

export function statement(that: any, name: string, text: string) {
    that.appendStatementInput(name)
        .appendField(text);
}

export function inline(that: any) {
    that.setInputsInline(true);
    that.setPreviousStatement(true, null);
    that.setNextStatement(true, null);
}

export function output(that: any, type: any) {
    that.setInputsInline(true);
    that.setOutput(true, type);
}

export function color(that: any, categoryName: keyof typeof colors) {
    that.setColour(colors[categoryName]);
}

export function addItemToToolbox(
    toolbox: Toolbox,
    categoryName: string,
    item: ToolboxItem
) {
    const category = toolbox.contents.find(
        (cat) => cat.kind === "category" && cat.name === categoryName
    ) as CustomCategory | undefined;

    if (!category) {
        console.error(`Category "${categoryName}" not found.`);
        return;
    }

    if (!category.contents) {
        console.error(`Category contents of "${categoryName}" not found.`);
        return;
    }

    category.contents.push(item);
}

// ========== Basic ==========

import "./categories/Basic"

// ========== Logic ==========

// ========== Loops ==========

// ========== Math ==========

// ========== Text ==========

// ========== Lists ==========

// ========== Colour ==========

// #################### SEPARATOR ####################

// ========== Variables ==========

// ========== Functions ==========

// #################### SEPARATOR ####################

// ========== GPIO ==========

import "./categories/GPIO"

// ========== ADC ==========

import "./categories/ADC"

// #################### SEPARATOR ####################

// ========== Smartled ==========

import "./categories/Smartled"

// ========== SimpleRadio ==========

import "./categories/SimpleRadio"

// #################### SEPARATOR ####################

// ========== Servo ==========

import "./categories/Servo"

// ========== Colors ==========

import "./categories/Colors"

// ========== Readline ==========

import "./categories/Readline"

// #################### SEPARATOR ####################

// ========== Robutek ==========

import "./categories/Robutek"

// #################### SEPARATOR ####################

// ========== LEDC ==========

import "./categories/LEDC"

// ========== PulseCounter ==========

import "./categories/PulseCounter"

// ========== Motor ==========

import "./categories/Motor"

// ========== WiFi ==========

import "./categories/WiFi"

// ========== GridUI ==========

import "./categories/GridUI"

// ========== I2C ==========

import "./categories/I2C"

// ========== FS ==========

import "./categories/FS"

// ========== Path ==========

import "./categories/Path"

// #################### SEPARATOR ####################

// ========== Custom Button ==========

import "./categories/CustomButton"
