import ContactFormV2 from "../components/ContactFormV2";

const ContactPage = () => {
  const iconStyle =
    "bg-gray-400 rounded-full p-1 w-6 h-6 transform hover:scale-110 cursor-pointer transition duration-500";
  const socialmediaIconsStyle =
    "w-5 h-5 hover:scale-110  cursor-pointer transition duration-500 ";
  // ("w-6 h-6 hover:scale-110 cursor-pointer transition duration-500 ");
  return (
    <div className=" min-h-screen" id="contact">
      <div className=" min-h-screen  flex flex-col justify-center">
        <div className="flex flex-col  md:flex-row my-10 md:my-0  mx-10 md:mx-0">
          <div className=" w-full md:w-1/2">
            <div className="h-full flex flex-col justify-center">
              <div className="md:ml-28 pb-20 text-center md:text-start">
                <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
                <p className="py-3 text-sm md:text-base text-slate-100">
                  Whether you have a project in mind, a question about my work,
                  or just want to say hello, I'd love to hear from you! Feel
                  free to drop me a message, and let's start a conversation.
                </p>
                <div className=" flex justify-between py-7 flex-col md:flex-row align-middle items-center">
                  <div className="flex text-sm space-y-1 flex-col  text-slate-300">
                    <p>+251 925 536 784</p>
                    <p>fakemail@mail.com</p>
                  </div>
                  <div className=" flex space-x-5 mt-5 md:mt-0 ">
                    {/* <img
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
                    /> */}

                    {/* <img
                      src="/socialmedia/github-6-24.ico"
                      className={socialmediaIconsStyle}
                      alt=""
                    /> */}
                    <img
                      src="/socialmedia/github-9-24.ico"
                      className={socialmediaIconsStyle}
                      alt=""
                    />
                    <img
                      src="/socialmedia/linkedin-4-24.ico"
                      className={socialmediaIconsStyle}
                      alt=""
                    />
                    {/* <img
                      src="/socialmedia/linkedin-24.ico"
                      className={socialmediaIconsStyle}
                      alt=""
                    /> */}
                    <img
                      src="/socialmedia/twitter-24.ico"
                      className={socialmediaIconsStyle}
                      alt=""
                    />
                    <img
                      src="/socialmedia/discord-2-24.ico"
                      className={socialmediaIconsStyle}
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
