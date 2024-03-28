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
import ContactUs from "../components/ContactUs";
import FaqSection from "../components/FaqSection";
import InfoBanner from "../components/InfoBanner";
import banner from "../data/banner";
import SEO from "../components/SEO";

function Homepage() {
  return (
    <Layout navbar={true} footer={true} isHomepage={true}>
      <SEO
        title="Medusa | Home"
        description="Medusa Energy actúa como un puente entre inversores, constructores y consumidores, facilitando la colaboración y el desarrollo de proyectos de energía renovable de manera eficiente y efectiva."
      />
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
      <ContactUs />
    </Layout>
  );
}

export default Homepage;
