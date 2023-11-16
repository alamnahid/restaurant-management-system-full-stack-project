import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Room Details/Header/Header";
import RoomInfo from "../../components/Room Details/Room Info/RoomInfo";
import RoomReservation from "../../components/Room Details/Room Reservation/RoomReservation";


const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/alamnahid/restaurant-management-system-full-stack-project/main/Client-side-code/public/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader></Loader>



    return (
        <div>
            <Helmet>
                <title>{room.title}</title>
            </Helmet>
            <Container>

                {/* header  */}
                <div className="flex flex-col gap-6 md:gap-10 mt-6">
                    <Header roomData={room}></Header>
                </div>

                {/* room info  */}
                <div className="grid grid-cols-1 md:grid-cols-7">
                    <RoomInfo roomData={room}></RoomInfo>
                   <div className="col-span-3 order-first md:order-last mb-10 ">
                        
                        <RoomReservation room={room}></RoomReservation>
                   </div>

                </div>



            </Container>


        </div>
    );
};

export default RoomDetails;