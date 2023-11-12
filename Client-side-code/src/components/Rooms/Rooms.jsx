import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";


const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch('rooms.json')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    }, [])
    console.log(rooms)
    return (
        <div>
            <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12">
            {
                rooms?.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
            }
        </div>
            </Container>
        </div>
    );
};

export default Rooms;