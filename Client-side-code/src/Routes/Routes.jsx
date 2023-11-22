import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main"
import ErrorPage from "../Pages/Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import RoomDetails from "../Pages/Room Details/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getRoom } from "../api/room";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import AddRoom from "../Pages/Dashboard/Host/AddRoom";
import MyListings from "../Pages/Dashboard/Host/MyListings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/room/:id',
          element: <PrivateRoutes><RoomDetails></RoomDetails></PrivateRoutes>,
          loader: ({params})=>getRoom(params.id)
        }
      ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: 'add-room',
          element: <AddRoom></AddRoom>
        },
        {
          path: 'my-listings',
          element: <MyListings></MyListings>
        }
      ]
    }
  ]);

  export default router;