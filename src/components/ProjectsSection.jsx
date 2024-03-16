import React from "react";
// import { animated, useSpring } from "react-spring";
import ProjectCard from "./ProjectCard";
import Label from "./Label";
import Button from "./Button";

function ProjectsSection() {
  // const [activeIndex, setActiveIndex] = React.useState(0);
  const projects = [
    {
      totalProfit: "30%",
      target: "$464.000.00 USD",
      title: "Hotel Don Juan",
      place: "Badajoz",
      description:
        "El proyecto solar favorito de autoconsumo en la fábrica de Alvarez Camacho, ubicado en Machena Sevilla, es una inversion viable y...",
      image: "/assets/projects/project2.webp",
    },
    {
      totalProfit: "100%",
      target: "$354.000.00 USD",
      title: "Alvarez Camacho",
      place: "Marchena, Sevilla, España",
      description:
        "El proyecto solar favorito de autoconsumo en la fábrica de Alvarez Camacho, ubicado en Machena Sevilla, es una inversion viable y...",
      image: "/assets/projects/project1.webp",
    },
    {
      totalProfit: "77%",
      target: "$354.000.00 USD",
      title: "SD Huesca",
      place: "Badajoz",
      description:
        "El proyecto solar favorito de autoconsumo en la fábrica de Alvarez Camacho, ubicado en Machena Sevilla, es una inversion viable y...",
      image: "/assets/projects/project3.webp",
    },
  ];

  // const props = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { tension: 280, friction: 60 },
  // });

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
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
