import NavBar from "@/component/navBar";

const WithLayOutPage = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center text-2xl my-2 text-red-200 bg-red-900 py-4">
        <h1>my</h1>
        <h1 className="mx-4">name</h1>
        <h1 className="me-4">is</h1>
        <h1>sayem</h1>
      </div>
      {children}
      <footer className="text-center bg-slate-500 text-neutral-950 font-bold py-4 ">
        This is younik footer
      </footer>
    </div>
  );
};

export default WithLayOutPage;
