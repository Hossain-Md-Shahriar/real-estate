import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    </>
  );

  return (
    <div className="navbar bg-base-100 px-0 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <a className="btn btn-ghost text-xl rounded">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/login"
          className="px-5 py-2 text-lg font-semibold text-white hover:text-[#0F4C75] bg-[#0F4C75] hover:bg-white border hover:border-[#0F4C75] transition-all duration-150 rounded"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
