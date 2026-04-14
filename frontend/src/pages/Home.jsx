import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <>
      <a
        className="  text-xs sm:text-lg  sm:ml-130 mt-4 border border-black px-4 py-1 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-black hover:text-white transition duration-300 shadow-md inline-block"
        href="https://forever-admin-tau-mauve.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Admin Panel
      </a>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </>
  );
};

export default Home;
