import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main"
import ErrorPage from "../Pages/Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import RoomDetails from "../Pages/Room Details/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getRoom } from "../api/room";

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
    }
  ]);

  export default router;