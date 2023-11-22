
import MenuItem from "./MenuItem";
import { MdHomeWork } from "react-icons/md";


const GuestMenu = () => {
    return (
        <div>
            

            <MenuItem icon={MdHomeWork}
                label='My Bookings'
                address='my-bookings' />
            
        </div>
    );
};

export default GuestMenu;