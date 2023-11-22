import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdHomeWork } from "react-icons/md";


const HostMenu = () => {
    return (
        <div>
            <MenuItem icon={BsFillHouseAddFill}
                label='Add Room' address='add-room' />

            <MenuItem icon={MdHomeWork}
                label='My Listings'
                address='my-listings' />

        </div>
    );
};

export default HostMenu;