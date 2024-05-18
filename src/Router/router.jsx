import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Errorpage from "../Pages/ErrorPage/ErrorPage";

import Dashboad from "../Pages/Dashboad/Dahboard/Dashboad";
import Login from "../Pages/Varify_User/Login/Login";
import SignUp from "../Pages/Varify_User/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboad></Dashboad>,
    children: [
      {
        path: "dashboard/manageitem",
        element: <></>,
      },
    ],
  },
]);
