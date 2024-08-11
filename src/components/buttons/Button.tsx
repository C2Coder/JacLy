import classNamesOriginal, {Argument} from "classnames";
import {overrideTailwindClasses} from "tailwind-override";
import {FC, InputHTMLAttributes} from "react";

export const classNamesOverride = (...args: Argument[]) =>
    overrideTailwindClasses(classNamesOriginal(...args));


export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string,
    classNames?: string,
    onClick?: () => void,
    active?: boolean,

}


const Button: FC<ButtonProps> = ({text, classNames, onClick, active = true}) => {
    return <button
        onClick={onClick}
        className={classNamesOverride(
            "px-4 py-2","text-white", active ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300", "focus:outline-none",
        classNames)}>
        {text}
    </button>
}

export default Button;
