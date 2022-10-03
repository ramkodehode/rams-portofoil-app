import React from 'react';
import { InfoSection } from '../../components';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Navbar from '../../components/Navbar/NavbarElement';

import { homeObjOne, homeObjTwo } from './Data';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection {...homeObjOne} />
      <Projects />
    </>
  );
};
