import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { id: 1, url: "/", text: "home" },
    { id: 2, url: "about", text: "about" },
    { id: 3, url: "products", text: "products" },
    { id: 4, url: "cart", text: "cart" },
    { id: 5, url: "checkout", text: "checkout" },
    { id: 6, url: "orders", text: "orders" },
  ];

  console.log(links.map((link) => link.text));
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.url} className="capitalize">
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
