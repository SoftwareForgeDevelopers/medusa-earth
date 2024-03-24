import { useEffect, useState } from "react";
import { sanityClient } from "../core/config/Sanity.config";
import { SANITY_QUERIES } from "../core/utils/Constants";
import {
  mapSanityProjectsResponseToProjects,
  mapSanityTeamMembersResponseToTeamMembers,
} from "./mappers/Sanity.mapper";

export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await sanityClient.fetch(SANITY_QUERIES.GET_PROJECTS);
      const projects = mapSanityProjectsResponseToProjects(response);
      setProjects(projects);
    };

    fetchProjects();
  }, []);
  return projects;
};

export const useGetTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const response = await sanityClient.fetch(
        SANITY_QUERIES.GET_TEAM_MEMBERS,
      );
      const teamMembers = mapSanityTeamMembersResponseToTeamMembers(response);
      setTeamMembers(teamMembers);
    };

    fetchTeamMembers();
  }, []);
  return teamMembers;
};
