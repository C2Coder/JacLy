import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { useDevice } from "../../context/JaculusContext";
import Button from "../buttons/Button";
import { Input } from "blockly";
import { ValueInput } from "blockly/core/inputs";
import Label from "../labels/Label";

import classNamesOriginal, {Argument} from "classnames";
import {overrideTailwindClasses} from "tailwind-override";

export const classNamesOverride = (...args: Argument[]) =>
    overrideTailwindClasses(classNamesOriginal(...args));


export interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> { }

const Monitor: FC<HeaderProps> = ({ }) => {
    const { device } = useDevice();

    const [lines, setLines] = useState(10); // TODO: add UI for this - DONE

    const [text, setText] = useState("\n".repeat(lines));


    function setLenght(str: string, length: number) {
        if (length > 0) {
            setLines(length);
        }

        let list_text = str.split("\n");
        list_text.pop();

        while (list_text.length < length) {
            list_text.unshift("");
        }

        while (list_text.length > length) {
            for (let index = 0; index < list_text.length - 1; index++) {
                list_text[index] = list_text[index + 1];
            }
            list_text.pop();
        }
        

        setText(list_text.join("\n") + "\n");
    }

    useEffect(() => {
        if (!device) {
            return;
        }

        device.programOutput.onData((data) => {
            setLenght(text + data.toString(), lines);
        });

        device.programError.onData((data) => {
            setLenght(text + data.toString(), lines);
        });
    }, [device, setText, text]);

    return (
        <div className="monitor w-full h-full flex flex-col">
            <div className="my-2 white_text flex flex-row">
                <Button text="Clear" classNames="mr-4" onClick={() => setText("\n".repeat(lines))} />
                <Label text={"Showing " + lines + " lines"}></Label>
                <Button text="+" classNames="ml-2" onClick={() => {setLenght(text, lines + 1);}} />
                <Button text="-" classNames="ml-2 font-bold" onClick={() => {setLenght(text, lines - 1);}} />
            </div>

            <div className="p-2 text-white font-extrabold flex overflow-x-scroll hide-scrollbar bg-gray-700 font-mono rounded">
                <pre className="inline-block">{text}</pre>
            </div>
        </div>
    );
};

export default Monitor;