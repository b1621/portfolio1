import { Link } from "react-scroll";

const Home = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-7 transform hover:scale-110 cursor-pointer transition duration-500";
  const iconStyle2 =
    "hover:scale-110 h-5 w-5 cursor-pointer transition duration-500";
  return (
    <div id="home" className=" relative min-h-screen ">
      {/* <div className=" flex justify-end py-4 space-x-5 pr-10">
        <img
          className={iconStyle}
          src="/367593_linkedin_business_network_social_icon.png"
          alt=""
        />
        <img
          className={iconStyle}
          src="/211920_twitter_social_icon.png"
          alt=""
        />

        <img
          className={iconStyle}
          src="/317712_code repository_github_repository_resource_icon.png"
          alt=""
        />
        <img
          className={iconStyle}
          src="/5340252_discord_forum_group_message_icon.png"
          alt=""
        />
      </div> */}
      <div className=" absolute w-full flex justify-center md:justify-end py-10  md:py-6  space-x-7 pr-12">
        <a
          href="https://discord.com/users/1147455296164347904"
          target="__blank"
        >
          <img
            className={iconStyle2}
            src="/socialmedia/discord-2-24.ico"
            alt=""
          />
        </a>
        <a href="https://github.com/b1621" target="__blank">
          <img
            className={iconStyle2}
            src="/socialmedia/github-6-24.ico"
            alt=""
          />
        </a>
        {/* <img className="h-6" src="/socialmedia/github-9-24.ico" alt="" />
        <img className="h-6" src="/socialmedia/linkedin-4-24.ico" alt="" /> */}
        <img className={iconStyle2} src="/socialmedia/twitter-24.ico" alt="" />
        <a
          href="https://www.linkedin.com/in/bewuket-b-71287222b"
          target="__blank"
        >
          <img
            className={`${iconStyle2} h-5`}
            src="/socialmedia/linkedin-24.ico"
            alt=""
          />
        </a>
      </div>
      <div className="  min-h-screen flex flex-col justify-center">
        <div className=" flex flex-col-reverse  md:flex-row justify-around  w-[88%] mx-auto  align-middle pb-20 md:ml-32 ml-0 mt-10 pl-3 sm:pl-0">
          <div
            className=" mt-20 md:mt-0 w-full flex flex-col justify-center align-middle"
            data-aos="fade-down-right"
          >
            <div className="text-3xl md:text-5xl">
              Hello 👋, <br /> I'm
              <span className="font-bold md:text-7xl px-4 text-green-700">
                Bewuket Baye
              </span>
              , <br /> Software Developer
            </div>
            <div className=" text-lg md:text-xl my-5 md:my-9 text-slate-400">
              I specialize in full-stack web development and have a keen
              interest in cybersecurity.{" "}
            </div>
            <div className="text-base text-green-700 hover:text-green-800 cursor-pointer">
              <Link to="about" smooth={true} duration={1500}>
                More About me{" "}
                <span className=" text-lg mt-1 hover⚖ ">&darr;</span>
              </Link>
            </div>
          </div>
          <div
            className="flex justify-start  w-full"
            // data-aos="fade-up-left"
            data-aos="zoom-in"
          >
            {/* <img
              className=" ml-0 md:-ml-20  mt-0 md:-mt-20 top p-3 h-[130%]"
              src="./christian-buehner-DItYlc26zVI-unsplash-removebg-preview.png"
              alt=""
            /> */}
            <img
              className=" -mt-20 md:-mt-32 ml-0 md:ml-20 md:scale-125"
              src="/pers/IMG_2803-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
