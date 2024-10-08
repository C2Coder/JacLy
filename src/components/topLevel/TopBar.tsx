import {FC, InputHTMLAttributes} from "react";
import ConnectionBtn from "../buttons/ConnectionBtn";
import UploadBtn from "../buttons/UploadBtn";
import StartBtn from "../buttons/StartBtn";
import StopBtn from "../buttons/StopBtn";
import RestartBtn from "../buttons/RestartBtn";
import CopyBtn from "../buttons/CopyBtn";
import UploadLibsBtn from "../buttons/UploadLibsBtn";
export interface buttonProps extends InputHTMLAttributes<HTMLInputElement> {
}


const ConnectionBar: FC<buttonProps> = ({}) => {

    return (
        <div className="white_text w-full bg-gray-200 rounded p-2 mb-2 flex flex-row gap-2">
            <ConnectionBtn/>
            <UploadBtn/>
            <UploadLibsBtn/>
            <div className="w-2"></div>
            <StartBtn/>
            <StopBtn/>
            <RestartBtn/>
            <div className="w-2"></div>
            <div className="flex flex-grow"></div>
            <CopyBtn/>
        </div>
    );
}

export default ConnectionBar;