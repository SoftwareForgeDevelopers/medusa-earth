import Header from "../components/Header";
import ValuesSection from "../components/ValuesSection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import RegulationsSection from "../components/RegulationsSection";
import AboutMedusaSection from "../components/AboutMedusaSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import BlogSection from "../components/BlogSection";

function Homepage() {
  return (
    <div className="">
      <Header />
      <IntroSection />
      <RegulationsSection />
      <ValuesSection />
      <AboutMedusaSection />
      <TeamSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Homepage;
