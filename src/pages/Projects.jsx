import React from "react";
import Layout from "../layout/Layout";
import RegulationsSection from "../components/RegulationsSection";
import InfoBanner from "../components/InfoBanner";
import banner from "../data/banner";
import AllProjectsSection from "../components/AllProjectsSection";
import ContactUs from "../components/ContactUs";

function Projects() {
  return (
    <Layout navbar={true} footer={true}>
      <InfoBanner {...banner[1]} />
      <AllProjectsSection />
      <RegulationsSection />
      <InfoBanner {...banner[0]} />
      <ContactUs />
    </Layout>
  );
}

export default Projects;
