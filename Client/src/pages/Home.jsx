import React from "react";
import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import Framework from "../components/Home/frameworks";
import Service from "../components/Home/Service";
import BussinesSolution from "../components/Home/BussinesSolution";

function Home() {
  return (
    <>
      <Hero />
      <Service />
      <BussinesSolution />
      <Card />
      <Framework />
     
    </>
  );
}

export default Home;
