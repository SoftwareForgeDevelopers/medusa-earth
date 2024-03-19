import ValuesSection from "../components/ValuesSection";
import IntroSection from "../components/IntroSection";
import RegulationsSection from "../components/RegulationsSection";
import AboutMedusaSection from "../components/AboutMedusaSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import ProjectsSection from "../components/ProjectsSection";
import Layout from "../layout/Layout";
import FaqSection from "../components/FaqSection";

function Homepage() {
  return (
    <Layout navbar={true} footer={true}>
      <IntroSection />
      <RegulationsSection />
      <ValuesSection />
      <AboutMedusaSection />
      <TeamSection />
      <ProjectsSection />
      <ServicesSection />
      <BlogSection />
      <Newsletter />
      <FaqSection />
    </Layout>
  );
}

export default Homepage;
