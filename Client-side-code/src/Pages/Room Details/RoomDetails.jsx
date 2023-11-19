import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";

import { Helmet } from "react-helmet-async";
import Header from "../../components/Room Details/Header/Header";
import RoomInfo from "../../components/Room Details/Room Info/RoomInfo";
import RoomReservation from "../../components/Room Details/Room Reservation/RoomReservation";


const RoomDetails = () => {
    const room = useLoaderData()



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