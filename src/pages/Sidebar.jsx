import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";

const Sidebar = () => {
  const iconStyle =
    "w-8 h-8 bg-slate-100 my-1 rounded-full px-2 py-1 cursor-pointer ";
  return (
    <div className=" w-32 border fixed h-full flex flex-col justify-end">
      <div className="border mb-10 ">
        <div className="border w-20 mx-auto ">
          <Link to="home">
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
          <Link to="contact">
            <img className={iconStyle} src="/pageicons/contact.png" alt="" />
          </Link>
          <Link>
            <img className={iconStyle} src="/pageicons/user.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
