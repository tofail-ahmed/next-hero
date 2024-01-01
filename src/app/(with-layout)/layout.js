import React, { Children } from "react";

const WithLayOutPage = ({ children }) => {
  return (
    <div>
      <navBar
      {children}
      <footer className="text-center bg-slate-500 text-neutral-950 font-bold py-4 -mb-0">
        This is younik footer
      </footer>
    </div>
  );
};

export default WithLayOutPage;
