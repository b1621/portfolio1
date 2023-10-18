import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectsList = [
    {
      title: "Project 1 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis a cupiditate ",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-13.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-102.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-14.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-25.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-7.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-22.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/projects/best-homepage-9.png",
    },
  ];
  return (
    <div className=" min-h-screen" id="projects">
      <div className="">
        <h2 className="text-center text-4xl mb-4 mt-7">Projects</h2>
        <h3 className="text-center text-2xl text-slate-200">
          Things i've built so far
        </h3>
        <div className="flex flex-wrap  mt-10 mb-14 mx-10">
          {projectsList.map((project) => (
            <div key={project}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                livePreview={project.livePreview}
                viewCode={project.viewCode}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
