import { useState } from "react"
import { Button } from "@mui/material";

function Bluetooth() {
    const [device, setDevice] = useState(null);
    const [characterristic, setCharacteristic] = useState(null);
    const [server, setServer] = useState(null);
    const [service, setService] = useState(null);

    const connectToDevice = async () => {
        const device = await navigator.bluetooth
            .requestDevice({
                // filters: [
                //     { namePrefix: "Device Name" },
                //     { services: [ 'Service ID' ]}
                // ]
                acceptAllDevices: true,
            });
        setDevice(device);
        const server = await device.gatt.connect();
        setServer(server);
        const service = await server.getPrimaryService('Service ID');
        setService(service);
        const characteristic = await service.getCharacteristic('Characteristic ID');
        setCharacteristic(characteristic);
        device.addEventListener('gattserverdisconnected', onDisconnected);
    }

    const onDisconnected = (event) => {
        console.log("Bluetooth Device Disconnected");
        const device = "";
        setDevice(device);
    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={connectToDevice}>SCAN</Button>
        </>
    )

}

export default Bluetooth