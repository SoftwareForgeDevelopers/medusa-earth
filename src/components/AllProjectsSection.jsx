import React from "react";
import ProjectCard from "./ProjectCard";
import { useGetProjects } from "../services/Sanity.service";


function AllProjectsSection() {
  const projects = useGetProjects();
  return (
    <section className="flex flex-col my-28 rounded-ss-[70px] rounded-ee-[70px] py-[100px] px-[100px] gap-[65px] bg-center bg-cover bg-[url('/assets/backgrounds/blue-for-projects.webp')] bg-blend-luminosity">
      <div className="flex flex-wrap justify-center h-full w-full gap-x-[43px] gap-y-[65px] relative">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default AllProjectsSection;
