import React from "react";

const ProjectCard = ({
  title,
  description,
  techStack,
  livePreview,
  viewCode,
  image,
}) => {
  return (
    <div className="border border-slate-700 text-slate-300  w-72 rounded-xl mt-7 mr-10">
      <img className="  rounded-t-md opacity-80 h-48" src={image} alt="" />
      <div className=" p-4 space-y-2">
        <h2 className="text-lg">{title}</h2>
        <p className=" text-sm">{description}</p>
        <p className=" text-xs ">Tech stack : {techStack}</p>
        <div className="flex justify-between  text-sm text-slate-200">
          <p className=" cursor-pointer transition-all duration-300 hover:text-green-700">
            Live preview
          </p>
          <p className=" cursor-pointer transition-all duration-300 hover:text-green-700">
            Source code
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
