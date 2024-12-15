import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <section className="w-full h-[100vh]">
        <HeroSection />
      </section>

      <section className="w-full border-t border-t-[#302e2e]">
        <Features />
      </section>

      <footer className="w-full border-t border-t-[#302e2e]">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
