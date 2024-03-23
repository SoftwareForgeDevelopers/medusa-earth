import ProjectCard from "./ProjectCard";
import Label from "./Label";
import Button from "./Button";
import { useGetProjects, useGetTeamMembers } from "../services/Sanity.service";
import { useEffect } from "react";

function ProjectsSection() {
  // const [activeIndex, setActiveIndex] = React.useState(0);
  const projects = useGetProjects();
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
        {/* {projects.map((project, index) => (
          <animated.div
            style={props}
            key={index}
            className={`absolute top-0 left-0 transition-transform transform ${
              activeIndex === index ? "translate-x-0" : "translate-x-full"
            }`}>
            <ProjectCard project={project} />
          </animated.div>
        ))} */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div>
        {/* <button
          onClick={() =>
            setActiveIndex(
              (prev) => (prev - 1 + projects.length) % projects.length,
            )
          }>
          Anterior
        </button>
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % projects.length)
          }>
          Siguiente
        </button> */}
      </div>
    </section>
  );
}

export default ProjectsSection;
