import {FC, InputHTMLAttributes} from "react";
import {JacDevice} from "jaculus-tools/dist/src/device/jacDevice.js";
import {useDevice} from "../../context/JaculusContext";
import {WebSerialStream} from "../../jac-glue";
import Button from "./Button";

export interface StopBtnProps extends InputHTMLAttributes<HTMLInputElement> {
}

const StopBtn: FC<StopBtnProps> = ({}) => {
    const {setNewDevice, disconnectDevice, device} = useDevice();

    async function stop() {
        if (!device)
            return;

        await device.controller.lock().catch((err) => {
            console.error("Error locking device: " + err);
            throw 1;
        });

        await device.controller.stop().catch((err) => {
            console.error("Error stopping device: " + err);
        });

        await device.controller.unlock().catch((err) => {
            console.log("Error unlocking device: " + err);
            throw 1;
        });
    }

    let whenDisconnected = () => {
        return <>
            <Button text="Stop" active={false}/>
        </>;
    }

    let whenConnected = () => {
        return <>
            <Button text="Stop" active={true} onClick={stop}/>
        </>;
    }

    return (
        <>
            {device ? whenConnected() : whenDisconnected()}
        </>
    );
}

export default StopBtn;