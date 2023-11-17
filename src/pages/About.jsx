import { Link } from "react-scroll";
const About = () => {
  return (
    <div className=" min-h-screen section " id="about" name="about">
      <div className=" flex flex-col h-full justify-center">
        <div className="  flex md:mx-14 mb-10 ">
          <div
            className="  scale-110 hidden md:block "
            data-aos="zoom-in-right"
          >
            <img src="/pers/msg432754405-44032-removebg-preview.png" alt="" />
            {/* <img src="/pers/msg432754405-44030-removebg-preview.png" alt="" /> */}
            {/* <img
              src="/personal/pexels-italo-melo-2379004-removebg-preview.png"
              alt=""
            /> */}
          </div>
          <div
            data-aos="fade-left"
            className=" space-y-7 w-[650px]  mx-10 my-10 text-base text-lg"
          >
            <div className="mt-10">
              <h2 className=" text-3xl md:text-5xl text-center">About Me</h2>
              <div className="border-b border-green-700 w-14 mt-1 md:w-24 mx-auto"></div>
            </div>
            {/* <p className=" ">

              Howdy, My Name Is Wadee-_-Haddad A Cyber-Security Student At Amman
              Arab University, Born On May 25, 2004. I've Accomplished Several
              Notable Achievements, Including Receiving An Academic Acceleration
              From The Ministry Of Education In Jordan.
            </p> */}
            <p>
              "Greetings from my corner of the internet! As a passionate
              full-stack web developer, my goal is to create seamless,
              user-centered digital experiences. My name is Bewuket Baye. I
              enjoy transforming original concepts into beautiful, useful, and
              responsive websites and applications by fusing my creative and
              technical skills.
            </p>
            {/* <p>
              My journey in the realm of web development began with a
              fascination for coding, which has evolved into a career marked by
              continuous learning and growth. Over the years, I've honed my
              skills in front-end technologies like HTML5, CSS3, and JavaScript
              frameworks (such as React and Vue.js) to craft captivating user
              interfaces that engage and delight users.
            </p>
            <p>
              Equally adept in back-end development, I specialize in leveraging
              languages like Node.js, Python, and PHP, along with various
              databases and frameworks, to build robust and scalable server-side
              architectures. Seamlessly integrating these elements, I strive to
              create dynamic and efficient solutions that meet both client needs
              and industry standards.
            </p> */}
            <p>
              My motivation lies in finding solutions and enhancing user
              experiences, which goes beyond creating clear and organized code
              and attractive layouts. I am passionate about collaborating with
              teams to bring ideas to life because I firmly believe in the power
              of teamwork.
            </p>
            <p>
              When I'm not immersed in lines of code, you'll find me exploring
              new technologies, attending tech meetups, or seeking inspiration
              from diverse sources to infuse creativity into my projects.
            </p>
            <p>
              I'm thrilled to embark on new challenges and contribute my
              expertise to innovative projects.{" "}
              <Link
                to="contact"
                smooth={true}
                duration={2000}
                className=" text-green-700 hover:cursor-pointer"
              >
                Let's connect{" "}
              </Link>
              and build something remarkable together!"
            </p>
            {/* <div className=" ">
              <a
                className=" px-5 py-2 border rounded-md border-green-700 text-white duration-300 bg-green-800 hover:bg-green-900 "
                href="/pdf/Booktree.ngLinux-Basics-for-Hackers.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="inline w-4 mr-2 mb-1"
                  src="/settings/download-2-24.ico"
                  alt=""
                />
                Download Cv
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
