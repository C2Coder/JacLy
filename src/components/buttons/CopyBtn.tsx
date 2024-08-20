import { FC, InputHTMLAttributes, useState } from "react";
import Button, { classNamesOverride } from "./Button";
import { useGenerateCode } from "../../context/GenerateCodeContext";

export interface CopyBtnProps extends InputHTMLAttributes<HTMLInputElement> {
}

const CopyBtn: FC<CopyBtnProps> = ({ }) => {
  const [copied, setCopied] = useState(false);
  const { code, setCode } = useGenerateCode();

  const copyToClipboard = async (text: string) => {
    try {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  function copyCode() {
    copyToClipboard(code);
  }

  return (
    <>
      <Button classNames={classNamesOverride(copied ? "bg-green-500 hover:bg-green-600" : "")} text="Copy Code" active={true} onClick={copyCode} />
    </>
  );
}

export default CopyBtn;