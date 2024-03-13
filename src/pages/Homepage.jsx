import Header from "../components/Header";
import ValuesSection from "../components/ValuesSection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import RegulationsSection from "../components/RegulationsSection";
import AboutMedusaSection from "../components/AboutMedusaSection";
import ServicesSection from "../components/ServicesSection";

function Homepage() {
  return (
    <div className="">
      <Header />
      <IntroSection />
      <RegulationsSection />
      <ValuesSection />
      <AboutMedusaSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default Homepage;
