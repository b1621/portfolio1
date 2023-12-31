const ProjectCard = ({
  title,
  description,
  techStack,
  livePreview,
  viewCode,
  image,
}) => {
  const maxLength = 100;
  const truncatedDescription =
    description.length > maxLength
      ? `${description.substring(0, maxLength)} ...`
      : description;
  return (
    <div
      className="border border-slate-700 text-slate-400  w-72 rounded-xl mt-7 mr-10"
      data-aos="flip-left"
      // data-aos="fade-left"
    >
      {/* <img className="  rounded-t-md opacity-80 h-48" src={image} alt="" />
      <div className=" p-4 space-y-2">
        <h2 className="text-lg text-slate-200">{title}</h2>
        <p className=" text-sm">{description}</p>
        <p className=" text-xs ">Tech stack : {techStack}</p>
        <div className="flex justify-between  text-sm text-slate-400">
          <p className=" cursor-pointer transition-all duration-300 flex hover:text-green-700">
            <img
              className=" h-4 pr-2 mt-[3px]"
              src="/chain_connect_hyper_internet_link_security_web_icon_127072.png"
              alt=""
            />{" "}
            Live preview
          </p>
          <p className=" cursor-pointer transition-all duration-300 flex hover:text-green-700">
            <img
              className=" h-4 pr-2 mt-[3px]"
              src="/github_logo_icon_147285.png"
              alt=""
            />{" "}
            Source code
          </p>
        </div>
      </div> */}
      <div className=" p-4 space-y-2">
        <h2 className="text-lg text-slate-200">{title}</h2>
        <p className=" text-sm text-slate-300">{truncatedDescription}</p>
        <p className=" text-xs ">Tech stack : {techStack}</p>
        <img className=" rounded-md opacity-70 h-44" src={image} alt="" />

        <div className="flex justify-between  text-sm text-slate-400">
          <a
            className=" cursor-pointer transition-all duration-300 flex hover:text-green-700"
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=" h-4 pr-2 mt-[3px]"
              src="/chain_connect_hyper_internet_link_security_web_icon_127072.png"
              alt=""
            />{" "}
            Live preview
          </a>
          <a
            className=" cursor-pointer transition-all duration-300 flex hover:text-green-700"
            href={viewCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=" h-4 pr-2 mt-[3px]"
              src="/github_logo_icon_147285.png"
              alt=""
            />{" "}
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
