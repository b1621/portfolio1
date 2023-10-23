import React from "react";

const Contact = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-6 transform hover:scale-110 cursor-pointer transition duration-500";
  const inputStyle =
    " border-slate-700 bg-transparent rounded-md border py-2 px-3 w-[40%] outline-none ";
  return (
    <div className=" " id="contact">
      <div className=" h-screen  flex flex-col justify-between">
        <div className="">
          <div
            className=" bg-bgcolor2 rounded-lg my-20 mx-40 p-2 "
            data-aos="zoom-in"
          >
            <h2 className=" text-4xl text-center mt-4 mb-12 text-slate-300">
              Drop Me A Message
            </h2>
            <div className="  m-5">
              <div className=" space-x-5 mx-auto">
                <input
                  placeholder="your name"
                  className={`${inputStyle} transition duration-300 focus:border-green-700`}
                  type="text"
                />
                <input
                  type="text"
                  placeholder="your email"
                  className={`${inputStyle} transition duration-300 focus:border-green-700`}
                />
              </div>
              <div className=" my-5">
                <textarea
                  className={`${inputStyle} transition duration-300 focus:border-green-700`}
                  name=""
                  placeholder="your message ... "
                  id=""
                  cols="70"
                  rows="10"
                ></textarea>
              </div>
              <button className="border px-10 rounded-md py-1 border-green-700 text-green-700 transition duration-300 hover:bg-green-700 hover:text-slate-200">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className=" border-t border-slate-700 mx-auto w-[80%] pb-2"></div>
        <div className=" flex justify-around pb-14">
          <div className="flex text-sm space-x-20 text-slate-300">
            <p>+251 925 536 784</p>
            <p>fakemail@mail.com</p>
          </div>

          <div className=" flex space-x-5 ">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
