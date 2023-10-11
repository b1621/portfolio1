// import { useState } from "react";

import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <>
      <div className=" min-h-screen bg-bgcolor text-white ">
        <div className=" xl:container xl:mx-auto">
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
