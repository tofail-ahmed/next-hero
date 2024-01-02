"use client";

import classNames from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, exact=false,href,activeClassName, ...props }) => {
  const path = usePathname();
  const active =exact?path===href: path.startsWith(href);

  const classes = classNames(props.className, active && activeClassName);
  // console.log("path", path);
  // console.log("active", active);
  // console.log("classes", classes);
  if (classes) {
    props.className = classes;
  }
  return (
    <div>
      <Link href={href} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
