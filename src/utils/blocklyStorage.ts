/**
 * Utility functions for saving and loading Blockly workspace data as JSON files
 */

/**
 * Downloads the workspace JSON as a file
 * @param workspaceJson The JSON object representing the workspace
 * @param filename The name of the file to download (default: "blocks.json")
 */
export const saveWorkspaceToFile = (workspaceJson: object, filename: string = "blocks.json") => {
  try {
    const jsonString = JSON.stringify(workspaceJson, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the object URL
    URL.revokeObjectURL(url);
    
    console.log('Workspace saved successfully as:', filename);
  } catch (error) {
    console.error('Error saving workspace:', error);
    throw new Error('Failed to save workspace');
  }
};

/**
 * Loads a workspace JSON from a file
 * @returns Promise that resolves to the parsed JSON object
 */
export const loadWorkspaceFromFile = (): Promise<object> => {
  return new Promise((resolve, reject) => {
    try {
      // Create a file input element
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json,application/json';
      
      input.onchange = (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) {
          reject(new Error('No file selected'));
          return;
        }
        
        // Validate file type
        if (!file.name.toLowerCase().endsWith('.json') && file.type !== 'application/json') {
          reject(new Error('Please select a valid JSON file'));
          return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const content = e.target?.result as string;
            const jsonData = JSON.parse(content);
            
            // Basic validation that it looks like a Blockly workspace
            if (typeof jsonData === 'object' && jsonData !== null) {
              console.log('Workspace loaded successfully from:', file.name);
              resolve(jsonData);
            } else {
              reject(new Error('Invalid JSON format'));
            }
          } catch (parseError) {
            reject(new Error('Failed to parse JSON file'));
          }
        };
        
        reader.onerror = () => {
          reject(new Error('Failed to read file'));
        };
        
        reader.readAsText(file);
      };
      
      input.oncancel = () => {
        reject(new Error('File selection cancelled'));
      };
      
      // Trigger the file picker
      input.click();
    } catch (error) {
      reject(new Error('Failed to create file picker'));
    }
  });
};

/**
 * Validates if a JSON object is a valid Blockly workspace
 * @param json The JSON object to validate
 * @returns boolean indicating if the JSON is valid
 */
export const isValidWorkspaceJson = (json: any): boolean => {
  try {
    return (
      typeof json === 'object' &&
      json !== null &&
      (json.hasOwnProperty('blocks') || json.hasOwnProperty('xml'))
    );
  } catch {
    return false;
  }
};