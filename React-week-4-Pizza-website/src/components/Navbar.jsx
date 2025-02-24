const Navbar = () => {
  return (
    <div className="navbar bg-red-400 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Pizza Mania</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Pizza Type</a>
          </li>
          <li>
            <a>About Pizza</a>
          </li>
        </ul>
        <div className="dropdown dropdown-bottom dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-transparent border-none shadow-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Pizza Type</a>
            </li>
            <li>
              <a>About Pizza</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;