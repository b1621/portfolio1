const Home = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-10 transform hover:scale-110 cursor-pointer transition duration-500";
  return (
    <div id="home" className=" h-screen">
      <div className=" flex justify-end py-4 space-x-5 pr-10">
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
      </div>
      <div className="flex justify-around  w-[90%] mx-auto  align-middle mt-[8%]">
        <div
          className=" text-6xl w-full flex flex-col justify-center align-middle"
          data-aos="fade-down-right"
        >
          <div className=" ">
            Hello 👋, <br /> I'm
            <span className=" text-7xl px-4 text-green-700">David B</span>,{" "}
            <br /> Software Developer
          </div>
          <div className=" text-xl my-9 text-slate-400">
            I specialize in full-stack web development and have a keen interest
            in cybersecurity.{" "}
          </div>
          <div className="text-base">More About me</div>
        </div>
        <div
          className="flex justify-start   w-full"
          // data-aos="fade-up-left"
          data-aos="zoom-in"
        >
          <img
            className=" -ml-28 -mt-10 top p-3 h-[120%]"
            src="./christian-buehner-DItYlc26zVI-unsplash-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
