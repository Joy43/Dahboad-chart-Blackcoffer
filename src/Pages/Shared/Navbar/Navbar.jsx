import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar bg-[#0a0b24] rounded-lg shadow-2xl">
      <div className="flex-1">
        <div className="text-xl">
          <Link to="/dashboard">
            <button className="flex items-center gap-1 bg-[#3025a388] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <div className="bg-gray-100 p-2 rounded-md dark:bg-gray-800">
                <MdDashboard className="w-3 h-3 text-gray-500 dark:text-gray-400" />
              </div>
              <button className=" text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90">
                Dashboard
              </button>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
