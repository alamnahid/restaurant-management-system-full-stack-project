

import { formatDistance } from "date-fns";
import Button from "../../Button/Button";
import Calender from "../Calendar/Calender";
import { useState } from "react";


const RoomReservation = ({room}) => {
    // const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])
    // const totalPrice = parseFloat()

    // console.log(totalDays)

    const [value, setValue] = useState({
        startdate: new Date(room?.from),
        enddate: new Date(room?.to),
        key: 'selection',

    })
    return (
        <div className="rounded-xl border-2 bg-white overflow-hidden">
            <div className="flex items-center gap-1 p-4">
                <p className="text-2xl font-semibold">${room?.price}</p>
                <p className="font-medium text-neutral-600">night</p>

            </div><hr />

            <div className="flex justify-center items-center">
            <Calender value={value}></Calender>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>

            <hr />

            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <p>Total</p>
                <p>${room?.price}</p>

            </div>

            
            
        </div>
    );
};

export default RoomReservation;