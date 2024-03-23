import React from "react";
import Label from "./Label";
import TeamCard from "./TeamCard";
import { useGetTeamMembers } from "../services/Sanity.service";

function TeamSection() {

  const teamMembers = useGetTeamMembers();

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
        {teamMembers.map((teamMember) => (
          <TeamCard
            key={teamMember.id}
            teamMember={teamMember}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
