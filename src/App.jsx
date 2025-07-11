import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen h-screen text-white bg-slate-800 py-8 px-[10%]">
      <Navbar/>
      <Mainroutes />
    </div>
  );
};

export default App;
