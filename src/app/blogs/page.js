import Link from "next/link";
import React from "react";
const blogs = [
  {
    id: 1,
    year: 2016,
    title: "title for 2016",
  },
  {
    id: 2,
    year: 2018,
    title: "title for 2018",
  },
  {
    id: 3,
    year: 2017,
    title: "title for 2017",
  },
];

const BlogsPage = () => {
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link
          className="block border border-yellow-800 my-2 text-center"
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
          key={id}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
