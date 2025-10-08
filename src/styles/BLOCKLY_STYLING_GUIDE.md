# Blockly Toolbox Styling Guide

This guide explains how to customize the appearance of your Blockly toolbox in the JacLy project.

## Overview

The styling system consists of three main components:
1. **CSS Styling** (`src/styles/blockly-custom.css`) - Visual appearance
2. **Theme Configuration** (`src/components/topLevel/BlocklyEditor.tsx`) - Blockly theme settings  
3. **Color Palette** (`src/customBlocks/toolbox.ts`) - Category colors

## Quick Start

The basic styling is already applied. To see the changes:

1. Make sure the CSS file is imported in `BlocklyEditor.tsx` ✅
2. The theme configuration is added to the workspace ✅  
3. Run your development server: `npm run dev`

## Customization Options

### 1. Changing Toolbox Colors

#### Method A: Modify the Color Palette

Edit `src/customBlocks/toolbox.ts`:

```typescript
export const colorPalette = {
  core: {
    "Basic": "#your-color-here",
    "Logic": "#another-color",
    // ... more colors
  },
  hardware: {
    "GPIO": "#hardware-color",
    // ... more hardware colors
  }
  // ... other categories
};
```

#### Method B: Individual Category Colors

```typescript
// In toolbox.ts, update specific colors:
export const colors = {
  "Basic": "#FF6B6B",        // Red theme
  "Logic": "#4ECDC4",        // Teal theme  
  "Loops": "#45B7D1",        // Blue theme
  "Math": "#96CEB4",         // Green theme
  "Text": "#FECA57",         // Yellow theme
  // ... continue for other categories
};
```

### 2. Changing Overall Theme

#### Dark Theme
```css
/* In blockly-custom.css, modify: */
.blocklyToolboxDiv {
  background-color: #1e1e1e !important;
  border-right: 2px solid #333333 !important;
}

.blocklyFlyout {
  background-color: #252526 !important;
}
```

#### Light Theme  
```css
.blocklyToolboxDiv {
  background-color: #ffffff !important;
  border-right: 2px solid #e2e8f0 !important;
}

.blocklyTreeLabel {
  color: #2d3748 !important;
}
```

#### Custom Theme
Add your own CSS class to switch between themes:

```css
.my-custom-theme .blocklyToolboxDiv {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.my-custom-theme .blocklyTreeLabel {
  color: #ffffff !important;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3) !important;
}
```

Then apply it to the BlocklyWorkspace:
```tsx
<BlocklyWorkspace
  className="w-full h-full my-custom-theme"
  // ... other props
/>
```

### 3. Typography and Spacing

#### Font Changes
```css
.blocklyToolboxDiv {
  font-family: 'Roboto', 'SF Pro Display', system-ui !important;
}

.blocklyTreeLabel {
  font-size: 16px !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
}
```

#### Spacing and Layout
```css
.blocklyTreeRow {
  min-height: 48px !important;  /* Larger touch targets */
  margin: 4px 8px !important;   /* More spacing between items */
}

.blocklyTreeRowContentContainer {
  padding: 12px 16px !important; /* More padding inside items */
}
```

### 4. Hover and Animation Effects

#### Custom Hover Effects
```css
.blocklyTreeRow:hover {
  background-color: rgba(255, 255, 255, 0.15) !important;
  transform: translateX(4px) scale(1.02) !important;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important;
}
```

#### Add Transitions
```css
.blocklyTreeRow {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.blocklyTreeIcon {
  transition: transform 0.2s ease !important;
}

.blocklyTreeRow:hover .blocklyTreeIcon {
  transform: rotate(5deg) scale(1.1) !important;
}
```

### 5. Advanced Customizations

#### Gradient Backgrounds
```css
.blocklyTreeRow[aria-label*="Logic"] {
  background: linear-gradient(90deg, #667eea, #764ba2) !important;
}

.blocklyTreeRow[aria-label*="Math"] {
  background: linear-gradient(90deg, #f093fb, #f5576c) !important;
}
```

#### Icon Customizations
```css
.blocklyTreeIcon {
  border-radius: 50% !important;  /* Circular icons */
  border: 2px solid rgba(255,255,255,0.3) !important;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3) !important;
}

/* Add icon content using pseudo-elements */
.blocklyTreeRow[aria-label*="Logic"] .blocklyTreeIcon::before {
  content: "⚡";
  color: white;
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Theme Configuration in Code

The theme object in `BlocklyEditor.tsx` can be customized:

```tsx
theme: {
  name: "my-custom-theme",
  base: "classic", // or "modern", "deuteranopia"
  componentStyles: {
    workspaceBackgroundColour: "#your-bg-color",
    toolboxBackgroundColour: "#your-toolbox-bg",
    toolboxForegroundColour: "#your-text-color",
    flyoutBackgroundColour: "#your-flyout-bg",
    // ... more options
  },
  blockStyles: {
    logic_blocks: {
      colourPrimary: "#primary-color",
      colourSecondary: "#secondary-color", 
      colourTertiary: "#tertiary-color"
    },
    // ... more block styles
  },
  categoryStyles: {
    logic_category: {
      colour: "#category-color"
    }
    // ... more category styles
  }
}
```

## Color Schemes

### Predefined Schemes

#### Material Design
```javascript
const materialColors = {
  "Basic": "#2196F3",    // Blue
  "Logic": "#4CAF50",    // Green  
  "Loops": "#FF9800",    // Orange
  "Math": "#9C27B0",     // Purple
  "Text": "#607D8B",     // Blue Grey
  "Variables": "#E91E63", // Pink
  "Functions": "#795548"  // Brown
};
```

#### Sunset Theme
```javascript
const sunsetColors = {
  "Basic": "#FF6B6B",    // Coral
  "Logic": "#4ECDC4",    // Turquoise
  "Loops": "#45B7D1",    // Sky Blue
  "Math": "#F9CA24",     // Sunny Yellow
  "Text": "#6C5CE7",     // Purple
  "Variables": "#A0E7E5", // Mint
  "Functions": "#FD79A8"  // Pink
};
```

#### Professional Theme
```javascript
const professionalColors = {
  "Basic": "#34495E",    // Dark Blue Grey
  "Logic": "#27AE60",    // Green
  "Loops": "#3498DB",    // Blue
  "Math": "#E67E22",     // Orange
  "Text": "#9B59B6",     // Purple
  "Variables": "#1ABC9C", // Turquoise
  "Functions": "#E74C3C"  // Red
};
```

## Responsive Design

Make your toolbox mobile-friendly:

```css
@media (max-width: 768px) {
  .blocklyToolboxDiv {
    width: 180px !important;
  }
  
  .blocklyTreeLabel {
    font-size: 12px !important;
  }
  
  .blocklyTreeRow {
    min-height: 44px !important;
  }
}

@media (max-width: 480px) {
  .blocklyToolboxDiv {
    width: 150px !important;
  }
  
  .blocklyTreeRowContentContainer {
    padding: 8px 10px !important;
  }
}
```

## Troubleshooting

### Changes Not Showing
1. Clear browser cache (`Ctrl+Shift+R`)
2. Check that CSS file is properly imported
3. Ensure CSS selectors have `!important` flags
4. Check browser developer tools for conflicting styles

### Theme Not Applying
1. Verify theme object syntax in `BlocklyEditor.tsx`
2. Check console for JavaScript errors
3. Make sure color values are valid hex/rgb codes

### Performance Issues
1. Avoid complex CSS animations on large toolboxes
2. Use `transform` instead of changing `top/left` for animations
3. Consider `will-change` property for animated elements

## Best Practices

1. **Consistency**: Use a consistent color scheme across categories
2. **Accessibility**: Ensure sufficient contrast ratios
3. **Performance**: Use CSS transforms for animations
4. **Maintenance**: Group related styles together
5. **Documentation**: Comment your custom modifications

## Examples in Action

To apply a complete theme, you can:

1. Choose a color scheme from above
2. Update the `colors` object in `toolbox.ts`
3. Modify CSS variables in `blockly-custom.css`
4. Adjust theme configuration in `BlocklyEditor.tsx`
5. Test across different screen sizes

This modular approach makes it easy to switch between different themes or create new ones for different use cases.