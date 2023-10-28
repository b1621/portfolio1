import { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";

const Sidebar = () => {
  const styleIcon =
    "w-5 opacity-70 duration-300 hover:scale-110 cursor-pointer ";

  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Define the positions of your sections
    const homePosition = 0;
    const aboutPosition = document.getElementById("about").offsetTop;
    const skillsPosition = document.getElementById("techstack").offsetTop;
    const projectsPosition = document.getElementById("projects").offsetTop;
    const contactPosition = document.getElementById("contact").offsetTop;

    // Determine which section is currently in view
    if (scrollY >= homePosition && scrollY < aboutPosition) {
      setActiveLink("home");
    } else if (scrollY >= aboutPosition && scrollY < skillsPosition) {
      setActiveLink("about");
    } else if (scrollY >= skillsPosition && scrollY < projectsPosition) {
      setActiveLink("techstack");
    } else if (scrollY >= projectsPosition && scrollY < contactPosition) {
      setActiveLink("projects");
    } else if (scrollY >= contactPosition) {
      setActiveLink("contact");
    } else {
      setActiveLink("about");
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("active link is : ", activeLink);

  return (
    <div className=" w-32  fixed h-full hidden md:flex flex-col justify-end justify-center  ">
      <div className=" mb-10 ">
        <div className=" w-20 mx-auto flex flex-col space-y-6 ">
          <Link to="home" smooth={true} duration={1500}>
            <img
              title="home"
              className={`${styleIcon}  ${
                activeLink === "home" ? " ml-3 scale-125   " : ""
              }`}
              src={
                activeLink === "home"
                  ? "/settings/house-24g.ico"
                  : "/settings/house-24.ico"
              }
              alt=""
            />
          </Link>
          <Link to="about" smooth={true} duration={1500}>
            <img
              title="about"
              className={`${styleIcon}  ${
                activeLink === "about" ? " ml-3 scale-125  " : ""
              }`}
              src={
                activeLink === "about"
                  ? "/settings/about-24g.ico"
                  : "/settings/about-32.ico"
              }
              alt=""
            />
          </Link>
          <Link to="techstack" smooth={true} duration={1500}>
            <img
              title="skills"
              className={`${styleIcon}  ${
                activeLink === "techstack" ? " ml-3 scale-125   " : ""
              }`}
              src={
                activeLink === "techstack"
                  ? "/settings/ssl-badge-4-24g.ico"
                  : "/settings/ssl-badge-4-24.ico"
              }
              alt=""
            />
          </Link>
          <Link to="projects" smooth={true} duration={1500}>
            <img
              title="projects"
              className={`${styleIcon}  ${
                activeLink === "projects" ? " ml-3 scale-125   " : ""
              }`}
              src={
                activeLink === "projects"
                  ? "/settings/stack-24g.ico"
                  : "/settings/stack-24.ico"
              }
              alt=""
            />
          </Link>
          <Link to="contact" smooth={true} duration={1500}>
            <img
              title="message"
              className={`${styleIcon}  ${
                activeLink === "contact" ? " ml-3 scale-125   " : ""
              }`}
              src={
                activeLink === "contact"
                  ? "/settings/message-2-24g.ico"
                  : "/settings/message-2-32.ico"
              }
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
