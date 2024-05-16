import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex ">
      <div className="grid min-h-screen w-64 bg-blue-400 boder border-zinc-300"></div>
      {/* -------dashboad contain--------- */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Sidebar;
