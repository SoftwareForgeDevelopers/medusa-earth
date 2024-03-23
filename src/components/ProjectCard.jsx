import React from "react";
import Button from "./Button";

function ProjectCard({ project }) {
	return (
		<div className="flex flex-col h-585 w-400 p-18 gap-5 rounded-38 shadow-2xl bg-white">
			<figure className="h-236 w-full overflow-hidden rounded-20 relative">
				<img
					src={project.imageUrl}
					alt={project.title}
					className="h-236 w-full object-cover"
				/>
				<Button
					type="white-without-border"
					styles="absolute w-105 h-42 font-w-bold text-sm top-2 right-3"
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
					<p className="text-20 font-w-bold text-var-dark-blue">
						{project.overallProfitability}%
					</p>
					<p className="text-20 font-w-bold text-var-dark-blue">
						{project.targetCollection}
					</p>
				</div>
			</div>

			<div className="relative h-19 w-364 bg-var-grey-blue rounded-xl">
				<div
					style={{
						width:
							project.targetCollection && project.currentCollection
								? (project.currentCollection / project.targetCollection) * 100 +
									"%"
								: 0,
					}}
					className="absolute h-full bg-gradient-to-r from-blue-900 to-blue-300 rounded-full"
				></div>
			</div>

			<div className="flex flex-col gap-4">
				<div>
					<h3 className="text-22 font-w-bold text-var-dark-blue">
						{project.title}
					</h3>
					<p className="text-sm font-w-bold text-var-dark-blue">
						{project.location}
					</p>
				</div>
				<p className="text-15 text-var-dark-blue">{project.description}</p>
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
