import { CgMenuRightAlt } from "react-icons/cg";
import { Link, NavLink } from "react-router";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Listed Books", path: "/books" },
];

const Navbar = () => {
  const renderLinks = () =>
    navItems.map(({ label, path }) => (
      <li key={path}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `font-medium transition-colors ${
              isActive
                ? "bg-success/10 text-success"
                : "hover:bg-base-200 hover:text-success"
            }`
          }
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <header className="bg-base-100 my-2">
      <div className="navbar container mx-auto min-h-16 px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
              <CgMenuRightAlt aria-hidden="true" className="h-6 w-6" />
            </button>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-10 mt-3 w-56 rounded-box bg-base-100 p-2 shadow-lg"
            >
              {renderLinks()}
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost px-2 text-2xl font-bold"
          >
            Book Vibe
          </Link>
        </div>

        <nav
          className="navbar-center hidden lg:flex"
          aria-label="Main navigation"
        >
          <ul className="menu menu-horizontal gap-2">{renderLinks()}</ul>
        </nav>

        <div className="navbar-end gap-2">
          <button className="btn btn-success btn-sm text-white sm:btn-md">
            Sign In
          </button>

          <button className="btn btn-accent btn-sm text-white sm:btn-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
