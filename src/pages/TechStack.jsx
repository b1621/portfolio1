import React from "react";

const TechStack = () => {
  const iconStyle = "h-32";
  return (
    <div className=" h-screen border border-bgcolor" id="techstack">
      <div className="mt-[10%] ">
        {/* <h2 className=" font-bold text-xl text-center">My Tech Stack</h2> */}
        <h2 className="text-center text-4xl mb-3">My Tech Stack</h2>
        <h3 className=" text-center text-2xl text-slate-200">
          Technologies I've been working with recently
        </h3>
        <div className="border flex flex-wrap space-x-10 my-7">
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            />
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />

            <img
              className={`${iconStyle} bg-slate-700 px-2`}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            />
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg"
            />
          </div>
          <div>
            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            />

            <img
              className={iconStyle}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
