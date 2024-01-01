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
const navBar = () => {
  return (
    <nav className="flex items center justify-between conatiner mx-auto">
      <h1 className="text-4xl font-semibold">Next Hero</h1>
      <ul className="felx justify-center items center">
        {navlinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navBar;
