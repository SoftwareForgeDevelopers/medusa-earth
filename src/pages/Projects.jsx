import React from "react";
import Layout from "../layout/Layout";
import RegulationsSection from "../components/RegulationsSection";
import InfoBanner from "../components/InfoBanner";
import banner from "../data/banner";

function Projects() {
  return (
    <Layout navbar={true} footer={true}>
      <InfoBanner {...banner[1]} />
      <RegulationsSection />
      <InfoBanner {...banner[0]} />
    </Layout>
  );
}

export default Projects;
