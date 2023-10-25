const About = () => {
  return (
    <div className=" h-screen section " id="about" name="about">
      <div className=" my-20 flex md:mx-14 ">
        <div className=" sm:-my-10 hidden md:block " data-aos="zoom-in-right">
          <img
            src="/personal/pexels-italo-melo-2379004-removebg-preview.png"
            alt=""
          />
        </div>
        <div data-aos="fade-left" className=" space-y-7 w-[650px]  mx-10 my-20">
          <div className="mt-10">
            <h2 className=" text-3xl md:text-5xl text-center">About Me</h2>
            <div className="border-b border-green-700 w-14 mt-1 md:w-24 mx-auto"></div>
          </div>
          <p className=" ">
            Howdy, My Name Is Wadee-_-Haddad A Cyber-Security Student At Amman
            Arab University, Born On May 25, 2004. I've Accomplished Several
            Notable Achievements, Including Receiving An Academic Acceleration
            From The Ministry Of Education In Jordan.
          </p>
          <div className=" ">
            <a
              className=" px-5 py-1 border rounded-md border-green-700   hover:shadow-md hover:shadow-green-700  text-green-700 "
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
