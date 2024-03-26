import React from "react";
import Button from "./Button";

function activeCard(project) {
	return (
		<div className="h-[585px] flex items-center mx-[20px]">
			<div
				className={`flex flex-col w-[400px] p-[18px] gap-5 rounded-[38px] shadow-2xl bg-white h-[585px]`}
			>
				<figure className="w-full overflow-hidden rounded-[20px] relative">
					<img
						src={project.imageUrl}
						alt={project.title}
						className="w-full object-cover"
					/>
					<Button
						type="white-without-border"
						styles="absolute w-[105px] h-[42px] font-w-bold text-sm top-2 right-3 px-0"
						content={project.status}
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
							{project.overallProfitability}%
						</p>
						<p className="text-[20px] font-w-bold text-var-dark-blue">
							{project.targetCollection}
						</p>
					</div>
				</div>

				<div className="relative h-[19px] w-[364px] bg-var-grey-blue rounded-xl">
					<div
						style={{
							width:
								project.targetCollection && project.currentCollection
									? (project.currentCollection / project.targetCollection) *
											100 +
										"%"
									: 0,
						}}
						className="absolute h-full bg-gradient-to-r from-blue-900 to-blue-300 rounded-full"
					></div>
				</div>

				<div className="flex flex-col gap-4">
					<div>
						<h3 className="text-[22px] font-w-bold text-var-dark-blue">
							{project.title}
						</h3>
						<p className="text-sm font-w-bold text-var-dark-blue">
							{project.location}
						</p>
					</div>
					<p className="text-[15px] text-var-dark-blue">
						{project.description}
					</p>
					<Button type="dark-blue" styles="w-32 font-w-regular text-sm px-0">
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
		</div>
	);
}

function inactiveCard(project) {
	return (
		<div className="h-[585px] flex items-center mx-[20px]">
			<div
				className="flex flex-col w-[266px] h-[381px] p-[18px] gap-5 rounded-[38px] shadow-2xl bg-white opacity-50"
			>
				<figure className="w-full overflow-hidden rounded-[20px] relative">
					<img
						src={project.imageUrl}
						alt={project.title}
						className="w-full object-cover"
					/>
					<Button
						type="white-without-border"
						styles="absolute w-[70px] h-[28px] font-w-bold text-[10px] top-2 right-3 px-0"
						content={project.status}
					/>
				</figure>

				<div className="flex flex-col">
					<div className="flex justify-between items-center">
						<p className="text-[9px] font-w-bold text-var-dark-blue">
							Rentabilidad Total
						</p>
						<p className="text-[9px] font-w-bold text-var-dark-blue">Objetivo</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-[12px] font-w-bold text-var-dark-blue">
							{project.overallProfitability}%
						</p>
						<p className="text-[12px] font-w-bold text-var-dark-blue">
							{project.targetCollection}
						</p>
					</div>
				</div>

				<div className="relative h-[12px] w-full bg-var-grey-blue rounded-xl">
					<div
						style={{
							width:
								project.targetCollection && project.currentCollection
									? (project.currentCollection / project.targetCollection) *
											100 +
										"%"
									: 0,
						}}
						className="absolute h-full bg-gradient-to-r from-blue-900 to-blue-300 rounded-full"
					></div>
				</div>

				<div className="flex flex-col gap-4">
					<div>
						<h3 className="text-[14px] font-w-bold text-var-dark-blue">
							{project.title}
						</h3>
						<p className="text-[8px] font-w-bold text-var-dark-blue">
							{project.location}
						</p>
					</div>
					<p className="text-[10px] text-var-dark-blue">
						{project.description}
					</p>
					<Button type="dark-blue" styles="w-[86px] font-w-regular text-[10px] px-0">
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
		</div>
	);
}

function ProjectCard({ project, currentSlideIndex, id }) {
	return id === currentSlideIndex ? activeCard(project) : inactiveCard(project);
}

export default ProjectCard;
