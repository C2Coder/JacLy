import { FC, InputHTMLAttributes, useState } from "react";
import Button from "./Button";
import { classNamesOverride } from "../../utils/classNamesOverride";
import { saveWorkspaceToFile } from "../../utils/blocklyStorage";

export interface SaveBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  workspaceJson: object;
}

const SaveBtn: FC<SaveBtnProps> = ({ workspaceJson }) => {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      setSaving(true);
      
      // Generate filename with timestamp
      const now = new Date();
      const timestamp = now.toISOString().slice(0, 19).replace(/[:.]/g, '-');
      const filename = `blocks-${timestamp}.json`;
      
      await saveWorkspaceToFile(workspaceJson, filename);
      
      setSaved(true);
      setTimeout(() => setSaved(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to save blocks:', error);
      alert('Failed to save blocks. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const getButtonText = () => {
    if (saving) return "Saving...";
    if (saved) return "Saved!";
    return "Save Blocks";
  };

  const getButtonClass = () => {
    if (saved) return "bg-green-500 hover:bg-green-600";
    if (saving) return "bg-yellow-500 hover:bg-yellow-600";
    return "";
  };

  return (
    <Button 
      classNames={classNamesOverride(getButtonClass())} 
      text={getButtonText()} 
      active={!saving} 
      onClick={handleSave}
      disabled={saving}
    />
  );
};

export default SaveBtn;