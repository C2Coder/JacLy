import classNamesOriginal, { Argument } from "classnames";
import { overrideTailwindClasses } from "tailwind-override";

export const classNamesOverride = (...args: Argument[]) =>
    overrideTailwindClasses(classNamesOriginal(...args));
