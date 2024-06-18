import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BsSun, BsFillMoonFill, BsCartFill } from "react-icons/bs";
import NavLinks from "./NavLinks";

const themes = {
  cmyk: "cmyk",
  synthwave: "synthwave",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme" || themes.cmyk);
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  const handleTheme = () => {
    const { cmyk, synthwave } = themes;
    const newTheme = theme === cmyk ? synthwave : cmyk;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            FurniFlare
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSun className="swap-on h-4 w-4" />
            <BsFillMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCartFill className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
