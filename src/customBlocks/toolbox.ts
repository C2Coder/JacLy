export type ToolboxItem = {
  kind: "block" | "sep" | "button";
  type?: string;        // For blocks
  blockxml?: string;    // For blocks with custom XML
  gap?: number;         // For separators (optional)
  text?: string;        // For buttons
  callbackKey?: string; // For buttons with callbacks
};

export type CustomCategory = {
  kind: "category";
  name: string;
  colour?: number | string;
  custom?: "PROCEDURE" | "VARIABLE"; // Custom types
  contents?: ToolboxItem[];          // Optional contents array
};

export type Toolbox = {
  kind: "categoryToolbox";
  name: string;
  contents: Array<CustomCategory | ToolboxItem>; // Allows categories, separators, and buttons at the top level
};

// Color to HEX
// hue        = ???
// saturation = 45%
// value      = 50%


const color_blocks = [[30, 110], [130, 150], [170, 200], [300, 320], [340, 10]];


function generateRanges(arr:number[][], increment:number) {
  return arr.map(pair => {
      let [start, end] = pair;
      let range = [];

      while (start !== end) {
          range.push(start);
          start = (start + increment) % 360;
          if (start === 0) start = 360; // Handle the case when start reaches exactly 360
      }
      range.push(end); // Include the end value in the range
      return range;
  });
}

const saturation = 0.45;
const value = 0.50;

const hexColors = generateRanges(color_blocks, 10)

console.log(hexColors);

export const colors = {
  "Basic":        "#615BA5", /* 245    */"Basic_gray":   "#888",
  "Logic":        "#5B80A5", // 210
  "Loops":        "#5BA55B", // 120
  "Math":         "#5B67A5", // 230
  "Text":         "#5BA55B", // 160
  "Lists":        "#725BA5", // 259
  "Colour":       "#A5725B", // 19
                            
  "Variables":    "#A55B80", // 330
  "Functions":    "#995BA5", // 290
                            
  "GPIO":         hexColors[2][0],
  "ADC":          hexColors[2][1],
  "Smartled":     hexColors[2][2],
  "SimpleRadio":  hexColors[2][3],

  // custom libs
  "Servo":        hexColors[4][0],
  "Colors":       hexColors[4][1],
  "Readline":     hexColors[4][2],
  //"":        hexColors[4][3],
  //"":        hexColors[4][4],

  // project specific libs
  "Robutek":      hexColors[3][0],
  //"":        hexColors[3][1],
  //"":        hexColors[3][2],
  //"":        hexColors[3][3],

  //"":        hexColors[1][0],
  //"":        hexColors[1][1],
  //"":        hexColors[1][2],
  //"":        hexColors[1][3],

  "LEDC":         hexColors[0][0],
  "PulseCounter": hexColors[0][1], 
  "Motor":        hexColors[0][2], 
  "WiFi":         hexColors[0][3], 
  "GridUI":       hexColors[0][4], 
  "I2C":          hexColors[0][5], 
  "FS":           hexColors[0][6], 
                          
  "Custom Button":"#5BA57A",
};

export const toolbox: Toolbox = {
    kind: "categoryToolbox",
    name: "Jacly Toolbox",
    contents: [
      { // BASIC
        kind: "category",
        name: "Basic",
        colour: colors["Basic"],
        contents: [
          /*{
            kind: "block",
            blockxml:
              '    <block type="async_func">\n' +
              '      <value name="NAME">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">main</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="call_func">\n' +
              '      <value name="NAME">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">main</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },*/
        ],
      },
      { // LOGIC
        kind: "category",
        name: "Logic",
        colour: colors["Logic"],
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            blockxml:
              '<block type="logic_compare"><field name="OP">EQ</field></block>',
          },
          {
            kind: "block",
            blockxml:
              '<block type="logic_operation"><field name="OP">AND</field></block>',
          },
          {
            kind: "block",
            type: "logic_negate",
          },
          {
            kind: "block",
            blockxml:
              '<block type="logic_boolean"><field name="BOOL">TRUE</field></block>',
          },
          {
            kind: "block",
            type: "logic_null",
          },
          {
            kind: "block",
            type: "logic_ternary",
          },
        ],
      },
      { // LOOPS
        kind: "category",
        name: "Loops",
        colour: colors["Loops"],
        contents: [
          {
            kind: "block",
            blockxml:
              '    <block type="controls_repeat_ext">\n' +
              '      <value name="TIMES">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">10</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="controls_whileUntil">\n' +
              '      <field name="MODE">WHILE</field>\n' +
              "    </block>",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="controls_for">\n' +
              '      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
              '      <value name="FROM">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="TO">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">10</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="BY">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="controls_forEach">\n' +
              '      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="controls_flow_statements">\n' +
              '      <field name="FLOW">BREAK</field>\n' +
              "    </block>\n",
          },
        ],
      },
      { // MATH
        kind: "category",
        name: "Math",
        colour: colors["Math"],
        contents: [
          {
            kind: "block",
            blockxml:
              '    <block type="math_round">\n' +
              '      <field name="OP">ROUND</field>\n' +
              '      <value name="NUM">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">3.1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_number">\n' +
              '      <field name="NUM">0</field>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_single">\n' +
              '      <field name="OP">ROOT</field>\n' +
              '      <value name="NUM">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">9</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_trig">\n' +
              '      <field name="OP">SIN</field>\n' +
              '      <value name="NUM">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">45</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_constant">\n' +
              '      <field name="CONSTANT">PI</field>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_number_property">\n' +
              '      <mutation divisor_input="false"></mutation>\n' +
              '      <field name="PROPERTY">EVEN</field>\n' +
              '      <value name="NUMBER_TO_CHECK">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">0</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_arithmetic">\n' +
              '      <field name="OP">ADD</field>\n' +
              '      <value name="A">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="B">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_on_list">\n' +
              '      <mutation op="SUM"></mutation>\n' +
              '      <field name="OP">SUM</field>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_modulo">\n' +
              '      <value name="DIVIDEND">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">64</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="DIVISOR">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">10</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_constrain">\n' +
              '      <value name="VALUE">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">50</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="LOW">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="HIGH">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">100</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="math_random_int">\n' +
              '      <value name="FROM">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">1</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="TO">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">100</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            type: "math_random_float",
          },
        ],
      },
      { // TEXT
        kind: "category",
        name: "Text",
        colour: colors["Text"],
        contents: [
          {
            kind: "block",
            blockxml:
              '    <block type="text_charAt">\n' +
              '      <mutation at="true"></mutation>\n' +
              '      <field name="WHERE">FROM_START</field>\n' +
              '      <value name="VALUE">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text">\n' +
              '      <field name="TEXT"></field>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_append">\n' +
              '      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n' +
              '      <value name="TEXT">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT"></field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_length">\n' +
              '      <value name="VALUE">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">abc</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_isEmpty">\n' +
              '      <value name="VALUE">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT"></field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_indexOf">\n' +
              '      <field name="END">FIRST</field>\n' +
              '      <value name="VALUE">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              '      <value name="FIND">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">abc</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_join">\n' +
              '      <mutation items="2"></mutation>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_getSubstring">\n' +
              '      <mutation at1="true" at2="true"></mutation>\n' +
              '      <field name="WHERE1">FROM_START</field>\n' +
              '      <field name="WHERE2">FROM_START</field>\n' +
              '      <value name="STRING">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_changeCase">\n' +
              '      <field name="CASE">UPPERCASE</field>\n' +
              '      <value name="TEXT">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">abc</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_trim">\n' +
              '      <field name="MODE">BOTH</field>\n' +
              '      <value name="TEXT">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">abc</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="text_prompt_ext">\n' +
              '      <mutation type="TEXT"></mutation>\n' +
              '      <field name="TYPE">TEXT</field>\n' +
              '      <value name="TEXT">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">abc</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
        ],
      },
      { // LISTS
        kind: "category",
        name: "Lists",
        colour: colors["Lists"],
        contents: [
          {
            kind: "block",
            blockxml:
              '    <block type="lists_indexOf">\n' +
              '      <field name="END">FIRST</field>\n' +
              '      <value name="VALUE">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_create_with">\n' +
              '      <mutation items="0"></mutation>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_repeat">\n' +
              '      <value name="NUM">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">5</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            type: "lists_length",
          },
          {
            kind: "block",
            type: "lists_isEmpty",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_create_with">\n' +
              '      <mutation items="3"></mutation>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_getIndex">\n' +
              '      <mutation statement="false" at="true"></mutation>\n' +
              '      <field name="MODE">GET</field>\n' +
              '      <field name="WHERE">FROM_START</field>\n' +
              '      <value name="VALUE">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_setIndex">\n' +
              '      <mutation at="true"></mutation>\n' +
              '      <field name="MODE">SET</field>\n' +
              '      <field name="WHERE">FROM_START</field>\n' +
              '      <value name="LIST">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_getSublist">\n' +
              '      <mutation at1="true" at2="true"></mutation>\n' +
              '      <field name="WHERE1">FROM_START</field>\n' +
              '      <field name="WHERE2">FROM_START</field>\n' +
              '      <value name="LIST">\n' +
              '        <block type="variables_get">\n' +
              '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
              "        </block>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_split">\n' +
              '      <mutation mode="SPLIT"></mutation>\n' +
              '      <field name="MODE">SPLIT</field>\n' +
              '      <value name="DELIM">\n' +
              '        <shadow type="text">\n' +
              '          <field name="TEXT">,</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="lists_sort">\n' +
              '      <field name="TYPE">NUMERIC</field>\n' +
              '      <field name="DIRECTION">1</field>\n' +
              "    </block>\n",
          },
        ],
      },
      { // COLOUR
        kind: "category",
        name: "Colour",
        colour: colors["Colour"],
        contents: [
          {
            kind: "block",
            blockxml:
              '    <block type="colour_picker">\n' +
              '      <field name="COLOUR">#ff0000</field>\n' +
              "    </block>\n",
          },
          {
            kind: "block",
            type: "colour_random",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="colour_rgb">\n' +
              '      <value name="RED">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">100</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="GREEN">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">50</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="BLUE">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">0</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
          {
            kind: "block",
            blockxml:
              '    <block type="colour_blend">\n' +
              '      <value name="COLOUR1">\n' +
              '        <shadow type="colour_picker">\n' +
              '          <field name="COLOUR">#ff0000</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="COLOUR2">\n' +
              '        <shadow type="colour_picker">\n' +
              '          <field name="COLOUR">#3333ff</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              '      <value name="RATIO">\n' +
              '        <shadow type="math_number">\n' +
              '          <field name="NUM">0.5</field>\n' +
              "        </shadow>\n" +
              "      </value>\n" +
              "    </block>\n",
          },
        ],
      },
      { kind: "sep" },
      { // VARIABLES
        kind: "category",
        name: "Variables",
        custom: "VARIABLE",
        colour: colors["Variables"],
      },
      { // FUNCTIONS
        kind: "category",
        name: "Functions",
        custom: "PROCEDURE",
        colour: colors["Functions"],
      },
      { kind: "sep" },
      { // GPIO 
        kind: "category",
        name: "GPIO",
        colour: colors["GPIO"],
        contents: [],
      },
      { // ADC
        kind: "category",
        name: "ADC",
        colour: colors["ADC"],
        contents: [],
      },
      { // SMARTLED
        kind: "category",
        name: "Smartled",
        colour: colors["Smartled"],
        contents: [],
      },
      { // Radio
        kind: "category",
        name: "SimpleRadio",
        colour: colors["SimpleRadio"],
        contents: [],
      },
      { kind: "sep" },
      { // Servo
        kind: "category",
        name: "Servo",
        colour: colors["Servo"],
        contents: [],
      },
      { // Colors
        kind: "category",
        name: "Colors",
        colour: colors["Colors"],
        contents: [],
      },
      { // Readline
        kind: "category",
        name: "Readline",
        colour: colors["Readline"],
        contents: [],
      },
      { kind: "sep" },
      {
        kind: "category",
        name: "Robutek",
        colour: colors["Robutek"],
        contents: [],
      },
      { kind: "sep" },
      { // LEDC
        kind: "category",
        name: "LEDC",
        colour: colors["LEDC"],
        contents: [],
      },
      { // PulseCounter
        kind: "category",
        name: "PulseCounter",
        colour: colors["PulseCounter"],
        contents: [],
      },
      { // Motor
        kind: "category",
        name: "Motor",
        colour: colors["Motor"],
        contents: [],
      },
      { // WiFi
        kind: "category",
        name: "WiFi",
        colour: colors["WiFi"],
        contents: [],
      },
      { // GridUI
        kind: "category",
        name: "GridUI",
        colour: colors["GridUI"],
        contents: [],
      },
      { // I2C
        kind: "category",
        name: "I2C",
        colour: colors["I2C"],
        contents: [],
      },
      { // FS
        kind: "category",
        name: "FS",
        colour: colors["FS"],
        contents: [],
      },
      { kind: "sep" },
      { // CUSTOM BUTTON
        kind: "category",
        name: "Custom Button",
        colour: colors["Custom Button"],
        contents: [
          {
            kind: "button",
            text: "A button",
            callbackKey: "myFirstButtonPressed",
          },
        ],
      },


    ],
  };
