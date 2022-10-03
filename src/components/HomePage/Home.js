import React from "react";
import { InfoSection } from "../../components";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import { homeObjOne, homeObjTwo } from "./Data";

export const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...homeObjOne} />
      <Projects />
    </>
  );
};
