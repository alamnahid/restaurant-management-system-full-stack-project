import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/room";


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getAllRooms()
            // .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                }
                else setRooms(data)

                setLoading(false)
            })
    }, [category])

    if(loading){
        return <Loader></Loader>
    }
    return (
        <div>
            <Container>
                {
                    rooms && rooms.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12">
                            {
                                rooms?.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                            }
                           </div>)
                    :
                    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
                            <Heading center={true} title={'No room available in this category'} subtitle={'please select others category'}></Heading>
                    </div>
                }
            </Container>
        </div>
    );
};

export default Rooms;