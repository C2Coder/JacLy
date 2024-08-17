import {FC, InputHTMLAttributes} from "react";
import {JacDevice} from "jaculus-tools/dist/src/device/jacDevice.js";
import {useDevice} from "../../context/JaculusContext";
import {WebSerialStream} from "../../jac-glue";
import Button from "./Button";

export interface StartBtnProps extends InputHTMLAttributes<HTMLInputElement> {
}

const StartBtn: FC<StartBtnProps> = ({}) => {
    const {setNewDevice, disconnectDevice, device} = useDevice();

    async function start() {
        if (!device)
            return;

        await device.controller.lock().catch((err) => {
            console.error("Error locking device: " + err);
            throw 1;
        });

        await device.controller.start("index.js").catch((err) => {
            console.error("Error starting device: " + err);
        });

        await device.controller.unlock().catch((err) => {
            console.log("Error unlocking device: " + err);
            throw 1;
        });
    }

    let whenDisconnected = () => {
        return <>
            <Button text="Start" active={false}/>
        </>;
    }

    let whenConnected = () => {
        return <>
            <Button text="Start" active={true} onClick={start}/>
        </>;
    }

    return (
        <>
            {device ? whenConnected() : whenDisconnected()}
        </>
    );
}

export default StartBtn;