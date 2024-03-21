import React from "react";
import ProjectCard from "./ProjectCard";
import Label from "./Label";
import Button from "./Button";
import projects from "../data/projects";

function ProjectsSection() {

  return (
    <section className="flex flex-col my-28 rounded-ss-70 rounded-ee-70 py-28 px-16 gap-3 bg-center bg-cover bg-[url('/assets/backgrounds/blue-for-projects.webp')] bg-blend-luminosity">
      <div>
        <Label text="Proyectos" white={true} />

        <div className="flex h-36  items-center justify-between gap-4 text-white">
          <h3 className="flex flex-col text-5xl font-w-bold ">
            <span className="block">Explorá Nuestro</span>
            <span className="block">Futuro Energético</span>
          </h3>
          <p className="w-412 text-18">
            Explora proyectos innovadores que están impulsando el cambio hacia
            un futuro más sostenible en energía renovable.
          </p>
          <Button
            type="white-without-border"
            styles="w-52 font-w-regular text-18">
            Explorar Proyectos
            <span>
              <img
                src="/assets/icons/little-arrow-blue.webp"
                alt="Arrow Right"
                className="w-5"
              />
            </span>
          </Button>
        </div>
      </div>

      <div className="flex justify-center h-full w-full gap-6 relative">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div></div>
    </section>
  );
}

export default ProjectsSection;
