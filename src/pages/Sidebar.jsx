import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";

const Sidebar = () => {
  const iconStyle =
    "w-8 h-8 bg-slate-100 my-1 rounded-full px-2 py-1 cursor-pointer ";
  const styleIcon =
    "w-6 opacity-70 duration-300 hover:scale-110 cursor-pointer";
  return (
    <div className=" w-32  fixed h-full flex flex-col justify-end">
      <div className=" mb-10 ">
        <div className=" w-20 mx-auto flex flex-col space-y-4 ">
          <Link title="about">
            <img
              title="about"
              className={styleIcon}
              src="/settings/about-32.ico"
              alt=""
            />
          </Link>
          <Link>
            <img
              title="skills"
              className={styleIcon}
              src="/settings/settings-32.ico"
              alt=""
            />
          </Link>
          <Link>
            <img
              title="projects"
              className={styleIcon}
              src="/settings/view-details-32.ico"
              alt=""
            />
          </Link>
          <Link>
            <img
              title="message"
              className={styleIcon}
              src="/settings/message-2-32.ico"
              alt=""
            />
          </Link>
          {/* <Link to="home">
            <img
            className={iconStyle}
              src="/pageicons/briefing_1705213.png"
              alt=""
            />
          </Link>
          <Link className=" cursor-pointer" to="about">
            <img
              className={iconStyle}
              src="/pageicons/contact-mail.png"
              alt=""
            />
          </Link>
          <Link to="techstack">
            <img className={iconStyle} src="/pageicons/user.png" alt="" />
          </Link>
          <Link to="projects">
            <img className={iconStyle} src="/pageicons/contact.png" alt="" />
          </Link>
          <Link to="contact">
            <img className={iconStyle} src="/pageicons/contact.png" alt="" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
