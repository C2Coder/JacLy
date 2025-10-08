
import { classNamesOverride } from "../../utils/classNamesOverride";
import { FC, InputHTMLAttributes } from "react";


export interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string,
    classNames?: string,
}


const Label: FC<LabelProps> = ({text, classNames}) => {
    return <label
        className={classNamesOverride(
             "px-2 py-4", "text-white", "bg-blue-500", "label" ,
        )}>
        {text}
    </label>
}

export default Label;
