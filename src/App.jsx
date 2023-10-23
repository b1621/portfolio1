import { useEffect } from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Sidebar from "./pages/Sidebar";
import Slider from "./pages/Slider";
import TechStack from "./pages/TechStack";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className=" min-h-screen bg-bgcolor text-white ">
        <div className=" xl:container xl:mx-auto">
          <Sidebar />
          <div className="md:ml-32">
            <Home />
            <About />
            <TechStack />
            <Slider />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
