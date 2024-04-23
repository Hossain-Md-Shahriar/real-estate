import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2 ${
              isActive
                ? "font-semibold hover:text-white text-[#0F4C75] border border-[#0F4C75] hover:bg-[#0F4C75] rounded"
                : "font-normal text-[#131313e0] hover:bg-[#e6e6e6] rounded"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/update"
              className={({ isActive }) =>
                `px-5 py-2 ${
                  isActive
                    ? "font-semibold hover:text-white text-[#0F4C75] border border-[#0F4C75] hover:bg-[#0F4C75] rounded"
                    : "font-normal text-[#131313e0] hover:bg-[#e6e6e6] rounded"
                }`
              }
            >
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-5 py-2 ${
                  isActive
                    ? "font-semibold hover:text-white text-[#0F4C75] border border-[#0F4C75] hover:bg-[#0F4C75] rounded"
                    : "font-normal text-[#131313e0] hover:bg-[#e6e6e6] rounded"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar backdrop-blur-md px-4 py-3 fixed top-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold rounded px-0">GrandLuxe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="size-12 rounded-full overflow-hidden border border-[#989898]">
                <img
                  className="size-full object-cover object-center"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="px-5 py-2 text-lg font-semibold text-white hover:text-[#0F4C75] bg-[#0F4C75] hover:bg-white border hover:border-[#0F4C75] transition-all duration-150 rounded"
            >
              Sign out
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-5 py-2 text-lg font-semibold ${
                isActive
                  ? "text-[#0F4C75] hover:text-white border border-[#0F4C75] rounded hover:bg-[#0F4C75] transition-all duration-150"
                  : "text-white hover:text-[#0F4C75] bg-[#0F4C75] hover:bg-white border hover:border-[#0F4C75] transition-all duration-150 rounded"
              }`
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
