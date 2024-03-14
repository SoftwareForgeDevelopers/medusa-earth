import Header from "../components/Header";
import ValuesSection from "../components/ValuesSection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import RegulationsSection from "../components/RegulationsSection";
import AboutMedusaSection from "../components/AboutMedusaSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import ProjectsSection from "../components/ProjectsSection";

function Homepage() {
  return (
    <div className="">
      <Header />
      <IntroSection />
      <RegulationsSection />
      <ValuesSection />
      <AboutMedusaSection />
      <TeamSection />
      <ProjectsSection />
      <ServicesSection />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Homepage;
