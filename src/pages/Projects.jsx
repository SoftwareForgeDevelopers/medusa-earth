import React from "react";
import Layout from "../layout/Layout";
import RegulationsSection from "../components/RegulationsSection";
import InfoBanner from "../components/InfoBanner";
import banner from "../data/banner";
import AllProjectsSection from "../components/AllProjectsSection";
import ContactUs from "../components/ContactUs";
import SEO from "../components/SEO";

function Projects() {
  return (
    <Layout navbar={true} footer={true}>
      <SEO
        title="Medusa | Projects"
        description="Explora nuestro futuro energético con proyectos que transforman vidas, conectan comunidades e iluminan el camino hacia un futuro mejor."
        canonical="https://medusa.earth"
      />
      <InfoBanner {...banner[1]} />
      <AllProjectsSection />
      <RegulationsSection />
      <InfoBanner {...banner[0]} />
      <ContactUs />
    </Layout>
  );
}

export default Projects;
