import { sanityImageBuilder } from "../../core/config/Sanity.config";

export const mapSanityProjectsResponseToProjects = (response) => {
  return response.map((project) => {
    return {
      id: project._id,
      title: project.title,
      startDate: project.startDate,
      location: project.location,
      description: project.description,
      link: project.link,
      status: project.status,
      imageUrl: sanityImageBuilder(project.image.asset._ref).url(),
      overallProfitability: project.overallProfitability,
      targetCollection: project.targetCollection,
      currentCollection: project.currentCollection,
      currencyCode: project.currencyCode,
      numberOfInvestors: project.numberOfInvestors,
    };
  });
}

export const mapSanityTeamMembersResponseToTeamMembers = (response) => {
  return response.map((teamMember) => {
    return {
      id: teamMember._id,
      name: teamMember.name,
      role: teamMember.role,
      email: teamMember.email,
      phone: teamMember.phone,
      linkedinUrl: teamMember.linkedinUrl,
      imageUrl: sanityImageBuilder(teamMember.image.asset._ref).url(),
    };
  });
}
