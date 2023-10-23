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
        <div className=" text-6xl w-full flex flex-col justify-center align-middle">
          <div className="text-center ">
            Hello 👋 <br /> , I'm David B, <br /> Software Developer
          </div>
        </div>
        <div className="flex justify-start   w-full">
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
