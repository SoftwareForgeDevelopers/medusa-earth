import Label from "./Label";
import TeamCard from "./TeamCard";
import { useGetTeamMembers } from "../services/Sanity.service";

function TeamSection() {
  const teamMembers = useGetTeamMembers();

  return (
    <section className="flex flex-col w-100vw gap-20 py-28 px-[25px] laptop:px-16">
      <div className="flex flex-col gap-4 text-center tablet:text-left">
        <div className="flex h-full w-full justify-center tablet:justify-normal">
          <Label text="Equipo" />
        </div>
        <h3 className="flex-row items-center text-[40px] text-var-dark-blue tablet:text-[44px] wide:text-5xl">
          Conocé al equipo detrás de{" "}
          <span className="font-w-bold">Medusa Energy</span>
        </h3>
        <p className="text-[18px]">
          Revelando las mentes que dan forma a las estrategias futuras.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((teamMember) => (
          <TeamCard key={teamMember.id} teamMember={teamMember} />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
