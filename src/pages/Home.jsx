import { Link } from "react-scroll";

const Home = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-7 transform hover:scale-110 cursor-pointer transition duration-500";
  const iconStyle2 =
    "hover:scale-110 h-5 w-5 cursor-pointer transition duration-500";
  return (
    <div id="home" className="relative min-h-screen">
      {/* <div className="flex justify-end space-x-5 py-4 pr-10">
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
      <div className="absolute flex w-full justify-center space-x-7 py-6 pr-12 md:justify-end">
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
      <div className="flex min-h-screen flex-col justify-center">
        <div className="mx-auto ml-0 mt-10 flex w-[88%] flex-col justify-around pb-20 pl-3 align-middle sm:pl-0 md:ml-32 md:flex-row">
          <div
            className="mx-auto mt-20 flex w-[80%] flex-col justify-center align-middle md:mt-0 md:w-full"
            data-aos="fade-down-right"
          >
            <div className="text-3xl md:text-4xl">
              Hello 👋, <br /> I'm
              <span className="px-4 font-bold text-green-700 md:text-5xl">
                Bewuket Baye
              </span>
              , <br /> Software Developer
            </div>
            <div className="my-5 text-lg text-slate-400 md:my-9 md:text-xl">
              I specialize in full-stack web development and have a keen
              interest in cybersecurity.{" "}
            </div>
            <div className="cursor-pointer text-base text-green-700 hover:text-green-800">
              <Link to="about" smooth={true} duration={1500}>
                More About me{" "}
                <span className="hover⚖ mt-1 text-lg">&darr;</span>
              </Link>
            </div>
          </div>
          <div
            className="flex w-full justify-start"
            // data-aos="fade-up-left"
            data-aos="zoom-in"
          >
            {/* <img
              className="top ml-0 mt-0 h-[130%] p-3 md:-ml-20 md:-mt-20"
              src="./christian-buehner-DItYlc26zVI-unsplash-removebg-preview.png"
              alt=""
            /> */}
            <img
              className="-mt-20 ml-0 scale-90 md:-mt-32 md:ml-20 md:scale-110"
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
