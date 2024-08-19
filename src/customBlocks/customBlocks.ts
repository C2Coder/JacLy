import Blockly, { BlockSvg } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";
import { CodeGenerator } from "blockly/core/generator";
import { toolbox, Toolbox, ToolboxItem, CustomCategory, colors } from "./toolbox";

export const cfg_inlineInputs = true;

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

// #################### SEPARATOR ####################

// ========== Custom Button ==========

import "./categories/CustomButton"
