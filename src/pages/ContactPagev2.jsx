import ContactFormV2 from "../components/ContactFormV2";

const ContactPage = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-6 h-6 transform hover:scale-110 cursor-pointer transition duration-500";
  return (
    <div className=" min-h-screen" id="contact">
      <div className=" min-h-screen  flex flex-col justify-center">
        <div className="flex flex-col  md:flex-row my-10 md:my-0  mx-10 md:mx-0">
          <div className=" w-full md:w-1/2">
            <div className="h-full flex flex-col justify-center">
              <div className="md:ml-28 pb-20">
                <h2 className=" text-5xl font-bold">Get in Touch</h2>
                <p className="py-3 text-slate-100">
                  Whether you have a project in mind, a question about my work,
                  or just want to say hello, I'd love to hear from you! Feel
                  free to drop me a message, and let's start a conversation.
                </p>
                <div className=" flex justify-between py-7">
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
          </div>
          <div className="w-full md:w-1/2 ">
            <ContactFormV2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
