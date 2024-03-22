import React from "react";
import Button from "./Button";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-[585px] w-[400px] p-[18px] gap-5 rounded-[38px] shadow-2xl bg-white">
      <figure className="h-[236px] w-full overflow-hidden rounded-[20px] relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-[236px] w-full object-cover"
        />
        <Button
          type="white-without-border"
          styles="absolute w-[105px] h-[42px] font-w-bold text-sm top-2 right-3"
          content={project.totalProfit === "100%" ? "Financiado" : "En proceso"}
        />
      </figure>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="text-sm font-w-bold text-var-dark-blue">
            Rentabilidad Total
          </p>
          <p className="text-sm font-w-bold text-var-dark-blue">Objetivo</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-w-bold text-var-dark-blue">
            {project.totalProfit}
          </p>
          <p className="text-[20px] font-w-bold text-var-dark-blue">
            {project.target}
          </p>
        </div>
      </div>

      <div className="relative h-[19px] w-[364px] bg-var-grey-blue rounded-xl">
        <div
          style={{ width: project.totalProfit }}
          className="absolute h-full bg-gradient-to-r from-blue-900 to-blue-300 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[22px] font-w-bold text-var-dark-blue">
            {project.title}
          </h3>
          <p className="text-sm font-w-bold text-var-dark-blue">
            {project.place}
          </p>
        </div>
        <p className="text-[15px] text-var-dark-blue">{project.description}</p>
        <Button type="dark-blue" styles="w-32 font-w-regular text-sm">
          Ver Proyecto
          <span>
            <img
              src="/assets/icons/arrow-right.webp"
              alt="Arrow Right"
              className="w-1"
            />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
