import Header from "../components/Header";
import ValuesSection from "../components/ValuesSection";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import RegulationsSection from "../components/RegulationsSection";
import AboutMedusaSection from "../components/AboutMedusaSection";

function Homepage() {
  return (
    <div className="">
      <Header />
      <IntroSection />
      <RegulationsSection />
      <ValuesSection />
      <AboutMedusaSection />
      <Footer />
    </div>
  );
}

export default Homepage;
