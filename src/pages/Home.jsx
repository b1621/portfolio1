const Home = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-10 transform hover:scale-110 cursor-pointer transition duration-500";
  return (
    <div id="home" className="border h-screen">
      <div className="border flex justify-end py-4 space-x-5 pr-10">
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
      <div className="flex justify-around border ml-32 align-middle mt-[8%]">
        <div className="border text-4xl w-full flex flex-col justify-center align-middle">
          <div className="text-center ">
            Hello 👋 <br /> , I'm David B, <br /> Software Developer
          </div>
        </div>
        <div className=" border border-red-900 w-full">
          <img
            className="  top p-3 h-96"
            src="./christian-buehner-DItYlc26zVI-unsplash-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
