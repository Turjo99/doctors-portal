import React from "react";
import AnotherFeature from "./AnotherFeature";
import Features from "./Features";
import Hero from "./Hero";
import MakeAppointment from "./MakeAppointment";
import OurService from "./OurService";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <OurService></OurService>
      <AnotherFeature></AnotherFeature>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
