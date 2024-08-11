import {FC, InputHTMLAttributes} from "react";

export interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Header: FC<HeaderProps> = ({}) => {

    return (
        <div className='box-border flex flex-row text-white w-full px-2 py-4'>
            <p className="text-2xl font-semibold">JacLy</p>
            <p className="my-auto ml-2"> a blockly editor for <a href="https://jaculus.org" target="_blank" className="my-auto text-blue-500 hover:text-blue-600">Jaculus</a> made by <a href="https://github.com/RoboticsBrno" target="_blank" className="my-auto text-blue-500 hover:text-blue-600">RoboticsBrno</a></p>
        </div>
    );
}

export default Header;