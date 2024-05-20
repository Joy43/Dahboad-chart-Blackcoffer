import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import useAuth from "../../../Hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  console.log(user);
  //    ----------logout------
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-300 bottom-1 rounded-lg shadow-2xl">
      <div className="flex-1">
        <div className="text-xl">
          <Link to="/dashboard/chartsummary">
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
        {user ? (
          <div className="dropdown dropdown-bottom mr-14">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="profile" src={user?.photoURL} />
              </div>
              <ul
                tabIndex={0}
                className="mt-4 mr-24 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Name
                    <span maxLength="8" className="badge ">
                      {user?.displayName}
                    </span>
                  </a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className=" border  rounded-lg mb-1 bg-blue-500  text-white cursor-pointer">
              <div className="  p-2 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                  />
                </svg>
                <input
                  className="outline-none px-2 w-fit cursor-pointertext-lg bg-transparent"
                  type="button"
                  value="Login"
                />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
