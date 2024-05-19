import { NavLink, Outlet } from "react-router-dom";
import Dashboadnav from "../DashboadNav/Dashboadnav";
import { MdTopic } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { FcComboChart } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
const Sidebar = () => {
  return (
    <div className="flex ">
      <div className="grid min-h-screen w-64 bg-white boder  rounded-xl shadow-2xl">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="hidden mx-auto md:block">
            {/* ----------      Header      ------- */}
            <div className=" animate-pulse mx-auto overflow-x-hidden text-center items-center">
              <img
                className=" w-28 bg-transparent"
                src="/src/assets/_Logo.png"
                alt=""
              />
            </div>
          </li>
          {/* -------------- Visualized ch----------*/}
          <li className="">
            <NavLink
              to="dashboard/yearly"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <IoBarChartSharp className="w-5 h-5 text-blue-400"></IoBarChartSharp>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Visualized Chart
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                year
              </span>
            </NavLink>
          </li>
          {/* ----------- chart summary------*/}
          <li>
            <NavLink
              to="/dashboard/chartsummary"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FcComboChart FcComboChart className="w-5 h-5"></FcComboChart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                chat summary
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-red-50 rounded-full">
                summary
              </span>
            </NavLink>
          </li>
          {/* ------------Topic--------------- */}
          <li>
            <NavLink
              to="dashboard/topic"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-[#7367F0] to-[#9D94F4] rounded-xl m-2 shadow-lg pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FcPieChart className="w-5 h-5"></FcPieChart>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Topic</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-blue-50 rounded-full">
                Filter topic
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* -------dashboad contain--------- */}
      <div className="flex-1 p-8">
        <div>
          <div>
            <Dashboadnav></Dashboadnav>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Sidebar;
