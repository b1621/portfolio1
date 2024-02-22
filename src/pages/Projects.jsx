import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectsList = [
    {
      title: "Fast Pizza Menu",
      description:
        " Fast-Pizza is an interactive web-based application designed to simplify the process of ordering food items from a diverse menu. The platform presents users with a user-friendly interface showcasing a variety of cuisines and dishes.",
      techStack: "HTML,Tailwind CSS,React, Redux-Toolkit",
      livePreview: "https://fast-pizza-menu.vercel.app/",
      viewCode: "https://github.com/b1621/fast-pizza-menu",
      image: "/projects/Screenshot from 2023-11-03 11-32-49.png",
    },
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
    // {
    //   title: "Fast Pizza Menu",
    //   description:
    //     " Fast-Pizza is an interactive web-based application designed to simplify the process of ordering food items from a diverse menu. The platform presents users with a user-friendly interface showcasing a variety of cuisines and dishes.",
    //   techStack: "HTML,Tailwind CSS,React, Redux-Toolkit",
    //   livePreview: "https://fast-pizza-menu.vercel.app/",
    //   viewCode: "https://github.com/b1621/fast-pizza-menu",
    //   image: "/projects/Screenshot from 2023-11-03 11-32-49.png",
    // },
    {
      title: "Azmari Music app",
      description:
        " Fast-Pizza is an interactive web-based application designed to simplify the process of ordering food items from a diverse menu. The platform presents users with a user-friendly interface showcasing a variety of cuisines and dishes.",
      techStack: "HTML,Emotion CSS,React, Redux-Toolkit, Node js ,Mongodb ",
      livePreview: "https://azmari-musicapp.vercel.app/",
      viewCode: "https://github.com/b1621/azmari-music",
      image: "/projects/Screenshot from 2024-02-22 14-15-25.png",
    },
  ];
  return (
    <div
      className="min-h-screen overflow-hidden border border-bgcolor"
      id="projects"
    >
      <div className="mt-4">
        <h2 className="mt-10 text-center text-5xl">Projects</h2>
        <h3 className="my-5 text-center text-2xl text-slate-200">
          Things i've built so far
        </h3>
        <div className="mx-10 mb-32 flex flex-wrap md:mx-20">
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
