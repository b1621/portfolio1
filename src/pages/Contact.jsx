import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-6 transform hover:scale-110 cursor-pointer transition duration-500";

  return (
    <div className=" " id="contact">
      <div className="border min-h-screen  flex flex-col justify-between">
        <ContactForm />
        <div className=" border-t border-slate-700 mx-auto  w-[80%] pb-2"></div>
        <div className=" flex justify-around pb-7">
          <div className="flex text-sm space-y-1 sm:space-x-5 md:space-x-20 flex-col sm:flex-row text-slate-300">
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
