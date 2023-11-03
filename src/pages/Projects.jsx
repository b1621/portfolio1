import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectsList = [
    {
      title: "Worldwise",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis a cupiditate ",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "https://worldwise-spa.vercel.app/",
      viewCode: "https://github.com/b1621/worldwise-SPA",
      image: "/projects/best-homepage-14.png",
    },
    {
      title: "UsePopcorn",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "https://usepopcorn-three.vercel.app/",
      viewCode: "https://github.com/b1621/usepopcorn",
      image: "/projects/Screenshot from 2023-11-03 08-43-35.png",
    },
    {
      title: "Fast Pizza Menu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "https://fast-pizza-menu.vercel.app/",
      viewCode: "https://github.com/b1621/fast-pizza-menu",
      image: "/projects/Screenshot from 2023-11-03 11-32-49.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/proj/best-homepage-25.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/proj/best-homepage-7.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/proj/best-homepage-22.png",
    },
    {
      title: "Project 2 title",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nobis accusamus omnis .",
      techStack: "HTML,JavaScript,SASS,React",
      livePreview: "",
      viewCode: "",
      image: "/proj/best-homepage-9.png",
    },
  ];
  return (
    <div
      className=" min-h-screen border overflow-hidden border-bgcolor"
      id="projects"
    >
      <div className=" mt-4">
        <h2 className="text-center text-5xl mt-10">Projects</h2>
        <h3 className="text-center text-2xl text-slate-200 my-5">
          Things i've built so far
        </h3>
        <div className="flex flex-wrap  mb-32 mx-10">
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
