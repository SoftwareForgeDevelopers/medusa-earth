import React from "react";
import Label from "./Label";
import TeamCard from "./TeamCard";

function TeamSection() {
  return (
    <section className="flex flex-col w-100vw gap-20 py-28 px-16">
      <div className="flex flex-col gap-4">
        <Label text="Equipo" />
        <h3 className="h-14 flex-row items-center text-5xl text-var-dark-blue">
          Conocé al equipo detrás de{" "}
          <span className="font-w-bold">Medusa Energy</span>
        </h3>
        <p className="text-18">
          Revelando las mentes que dan forma a las estrategias futuras.
        </p>
      </div>

      <div className="flex justify-center gap-12">
        <TeamCard
          name="Agustin Jaramillo"
          position="Co-Founder | CEO"
          image="/assets/team/agustin-jaramillo.webp"
          showPhone
          showLinkedin
          showGoogleMeet
        />
        <TeamCard
          name="Simon Escobar Toro"
          position="Co-Founder | CEO"
          image="/assets/team/simon.webp"
          showPhone
          showLinkedin
          showGoogleMeet
        />
        <TeamCard
          name="Diego Mesa Puyo"
          position="Board Member"
          image="/assets/team/diego-mesa.webp"
          showPhone
          showLinkedin
        />
      </div>
    </section>
  );
}

export default TeamSection;
