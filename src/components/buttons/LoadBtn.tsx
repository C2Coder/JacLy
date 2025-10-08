import { FC, InputHTMLAttributes, useState } from "react";
import Button from "./Button";
import { classNamesOverride } from "../../utils/classNamesOverride";
import { loadWorkspaceFromFile, isValidWorkspaceJson } from "../../utils/blocklyStorage";

export interface LoadBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  onLoadWorkspace: (workspaceJson: object) => void;
}

const LoadBtn: FC<LoadBtnProps> = ({ onLoadWorkspace }) => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = async () => {
    try {
      setLoading(true);
      
      const workspaceJson = await loadWorkspaceFromFile();
      
      // Validate the loaded JSON
      if (!isValidWorkspaceJson(workspaceJson)) {
        throw new Error('Invalid workspace format');
      }
      
      // Call the callback to update the workspace
      onLoadWorkspace(workspaceJson);
      
      setLoaded(true);
      setTimeout(() => setLoaded(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to load blocks:', error);
      if (error instanceof Error) {
        if (error.message === 'File selection cancelled') {
          // User cancelled file selection, don't show error
          return;
        }
        alert(`Failed to load blocks: ${error.message}`);
      } else {
        alert('Failed to load blocks. Please ensure you selected a valid JSON file.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (loading) return "Loading...";
    if (loaded) return "Loaded!";
    return "Load Blocks";
  };

  const getButtonClass = () => {
    if (loaded) return "bg-green-500 hover:bg-green-600";
    if (loading) return "bg-yellow-500 hover:bg-yellow-600";
    return "";
  };

  return (
    <Button 
      classNames={classNamesOverride(getButtonClass())} 
      text={getButtonText()} 
      active={!loading} 
      onClick={handleLoad}
      disabled={loading}
    />
  );
};

export default LoadBtn;