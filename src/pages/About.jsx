import React from "react";

const About = () => {
  return (
    <div className=" h-screen border border-yellow-800" id="about">
      <div className="border my-20 flex mx-10">
        <div className="border -my-10">
          <img
            src="/personal/pexels-italo-melo-2379004-removebg-preview.png"
            alt=""
          />
        </div>
        <div className=" space-y-10 w-[650px] border mx-10 my-20">
          <h2 className=" text-4xl text-center">About Me</h2>
          <p>
            Howdy, My Name Is Wadee-_-Haddad A Cyber-Security Student At Amman
            Arab University, Born On May 25, 2004. I've Accomplished Several
            Notable Achievements, Including Receiving An Academic Acceleration
            From The Ministry Of Education In Jordan.
          </p>
          <button>Download Cv</button>
        </div>
      </div>
    </div>
  );
};

export default About;
