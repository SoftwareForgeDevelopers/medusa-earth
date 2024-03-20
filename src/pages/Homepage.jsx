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
import InfoBanner from "../components/InfoBanner";
import banner from "../data/banner";

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
      <InfoBanner {...banner[0]} />
    </Layout>
  );
}

export default Homepage;
