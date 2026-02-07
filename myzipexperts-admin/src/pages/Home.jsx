import HeroSection from "../components/Home/HeroSection";
import ServiceCategories from "../components/Home/ServiceCategories";
import PopularOffers from "../components/Home/PopularOffers";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Reviews from "../components/HowItWorks/Reviews";
import BlogSection from "../components/HowItWorks/BlogSection";
import CtaSection from "../components/HowItWorks/CtaSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <PopularOffers />
      <HowItWorks />
      <Reviews />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default Home;
