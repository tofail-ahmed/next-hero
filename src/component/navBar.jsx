import Link from "next/link";

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
   
<nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: #f0f0f0;">
  <h1 style="font-size: 2rem; font-weight: bold;">Next Hero</h1>
  <ul style="display: flex; list-style: none; padding: 0; margin: 0;">
  
    {navlinks.map(({ path, title }) => (
      <li className="mx-2" key={path}>
        <Link href={path}>{title}</Link>
      </li>
    ))}
  </ul>
</nav>


  );
};

export default NavBar;
