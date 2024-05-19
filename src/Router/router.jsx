import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Errorpage from "../Pages/ErrorPage/ErrorPage";

import Dashboad from "../Pages/Dashboad/Dahboard/Dashboad";
import Login from "../Pages/Varify_User/Login/Login";
import SignUp from "../Pages/Varify_User/SignUp/SignUp";
import Yealychart from "../Pages/Dashboad/Dashboad_Iteams/Yearly/Yealychart";
import Chartsummary from "../Pages/Dashboad/Dashboad_Iteams/ChartSummary/Chartsummary";
import TopicChart from "../Pages/Dashboad/Dashboad_Iteams/TopicChart/TopicChart";

import Filtertopic from "../Pages/Dashboad/Filtertopic/Filtertopic";
import Countyfilter from "../Pages/Dashboad/FilterComponent/Countyfilter/Countyfilter";
import Sourcefilter from "../Pages/Dashboad/FilterComponent/Sourcefilter/Sourcefilter";
import Pestlefilter from "../Pages/Dashboad/Pestlefilter/Pestlefilter";
import Regionfilter from "../Pages/Dashboad/FilterComponent/Regionfilter/Regionfilter";

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
        path: "/dashboard/chartsummary",
        element: <Chartsummary></Chartsummary>,
      },
      {
        path: "dashboard/yearly",
        element: <Yealychart></Yealychart>,
      },
      {
        path: "dashboard/topic",
        element: <TopicChart></TopicChart>,
      },
      {
        path: "dashboard/countryfilter",
        element: <Countyfilter></Countyfilter>,
      },
      {
        path: "dashboard/filtertopic",
        element: <Filtertopic></Filtertopic>,
      },
      // {
      //   path: "dashboard/regionfilter",
      //   element: <Filtertopic></Filtertopic>,
      // },
      {
        path: "dashboard/sourcefilter",
        element: <Sourcefilter></Sourcefilter>,
      },
      {
        path: "dashboard/pestlefilter",
        element: <Pestlefilter></Pestlefilter>,
      },
      {
        path: "dashboard/regoionfilter",
        element: <Regionfilter></Regionfilter>,
      },
    ],
  },
]);
