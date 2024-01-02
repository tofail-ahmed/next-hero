import NavLink from "@/component/NavLink";
import Link from "next/link";
import React from "react";
const navLinks = [
  {
    path: "/dashboard",
    title: "DashBoard",
  },
  {
    path: "/dashboard/addProduct",
    title: "Add product",
  },
  {
    path: "/dashboard/manageProduct",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const SideBar = () => {
  return (
    <aside className=" justify-around">
      <h1 className="text-3xl text-center font-bold">Dash Baord</h1>
      <ul className=" ">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2 btn-primary" key={path}>
            <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
