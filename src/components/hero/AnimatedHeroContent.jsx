"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import StatsSection from "../animatedCounter/Stats";

export default function AnimatedHeroContent({ heroData }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="text-4xl md:text-5xl mt-4 lg:text-6xl font-bold tracking-tight mb-6 market"
          style={{
            backgroundColor: "hsl(221.2 83.2% 53.3%)",
            backgroundSize: "100%",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {heroData.heading}{" "}
          {/* <span className="text-primary">{heroData.highlightedText}</span> */}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          {heroData.description}
        </p>

        <HeroButtons
          primaryText={heroData.buttonText1}
          secondaryText={heroData.buttonText2}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <StatsSection
            clients={heroData.clients}
            yearsOfExperience={heroData.yearsOfExperience}
            projects={heroData.projects}
            countriesServed={heroData.countriesServed}
          />
        </div>
      </motion.div>
    </>
  );
}
