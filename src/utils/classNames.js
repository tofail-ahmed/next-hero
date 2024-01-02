import React from "react";

const classNames = (...args) => args.filter(Boolean).join(" ");
// const result = classNames(
//   "btn",
//   null,
//   "active",
//   "text-red-500",
//   undefined,
//   false,
//   "flex"
// );
// console.log(result); // Output: "btn active text-red-500 flex"
export default classNames;
