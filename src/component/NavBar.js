import NavLink from "./NavLink";

const navlinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "DashBoard",
  },
];
const NavBar = () => {
  return (
    <nav className="flex justify-around">
      <h1 className="text-3xl font-semibold	">Next Hero</h1>
      <ul className="flex ">
        {navlinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLink exact={path==='/'} activeClassName="text-blue-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
