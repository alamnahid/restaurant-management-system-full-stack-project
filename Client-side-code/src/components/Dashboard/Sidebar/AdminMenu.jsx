import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
    return (
        <div>
             <MenuItem icon={MdHomeWork}
                label='Manage User'
                address='manage-users' />
            
        </div>
    );
};

export default AdminMenu;