function TeamCard({ teamMember }) {
  return (
    <div className="flex flex-col items-center gap-6 w-[320px] phone:w-[370px] tablet:w-96 tablet:h-[501px]">
      <div className="w-full rounded-3xl p-2 bg-gradient-border-blue h-[420px] phone:h-[370px] tablet:h-96">
        <img
          src={teamMember.imageUrl}
          alt={teamMember.name}
          className="h-full object-cover rounded-3xl"
        />
      </div>

      <div className="flex flex-col w-full h-[93px] gap-3">
        <div>
          <h4 className="text-[20px] font-w-bold text-var-dark-blue">
            {teamMember.name}
          </h4>
          <p className="text-[18px]">{teamMember.role}</p>
        </div>
        <div className="flex items-center gap-1">
          {teamMember.phone && (
            <figure>
              <div className="w-6 h-6 p-1 rounded-sm bg-var-dark-blue">
                <img
                  src="/assets/icons/phone.webp"
                  alt="Phone"
                  className="w-full h-full"
                />
              </div>
            </figure>
          )}
          {teamMember.linkedinUrl && (
            <figure>
              <img
                src="/assets/icons/linkedin-2.webp"
                alt="Linkedin"
                className="w-6 h-6"
              />
            </figure>
          )}
          {true && (
            <figure>
              <img
                src="/assets/icons/meet.webp"
                alt="Google Meet"
                className="h-6"
              />
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
