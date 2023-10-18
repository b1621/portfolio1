import React from "react";

const About = () => {
  return (
    <div className=" h-screen border border-yellow-800" id="about">
      <div className=" my-20 flex mx-14">
        <div className=" md:-my-10 hidden sm:block ">
          <img
            src="/personal/pexels-italo-melo-2379004-removebg-preview.png"
            alt=""
          />
        </div>
        <div className=" space-y-10 w-[650px]  mx-10 my-20">
          <h2 className=" text-2xl md:text-4xl text-center">About Me</h2>
          <p className=" ">
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
