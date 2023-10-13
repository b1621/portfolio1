// import { useState } from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <>
      <div className=" min-h-screen bg-bgcolor text-white ">
        <div className=" xl:container xl:mx-auto">
          <Sidebar />
          <Home />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
