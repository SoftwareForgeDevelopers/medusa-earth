import React from "react";

function TeamCard({
	teamMember,
}) {
	return (
		<div className="flex flex-col items-center w-96 h-[501px] gap-6">
			<div className="w-full h-96 rounded-3xl p-2 bg-gradient-border-blue">
				<img
					src={teamMember.imageUrl}
					alt={teamMember.name}
					className=" rounded-3xl"
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
							<div className="w-6 h-6 p-1 bg-var-dark-blue">
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
