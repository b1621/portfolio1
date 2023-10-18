import React from "react";

const Slider = () => {
  const images = [];
  const imageUrls = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    // "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", // Duplicated
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", // Duplicated
    // Above two are duplicated for a seamless loop
  ];

  const duplicatedImageUrls = [...imageUrls, ...imageUrls, ...imageUrls];

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[90%] h-screen overflow-hidden relative">
        <div className=" slider flex transition-transform duration-1000 ease-in-out infinite">
          {/* ------------------------- */}
          {duplicatedImageUrls.map((image, index) => (
            <div
              key={index}
              className="slide w-32 mx-3 h-32 flex-shrink-0 shadow-md"
            >
              <img
                src={image}
                className=" w-fit h-fit object-cover"
                alt={`slide ${index + 1}`}
              />
            </div>
          ))}
          {/* <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            />
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
            />
          </div>

          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            />
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            />

            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
          </div>
          <div className="slide w-52 h-fit flex-shrink-0">
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            />
            <img
              className="w-52 h-52 object-cover"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
