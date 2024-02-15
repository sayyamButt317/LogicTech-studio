import React from "react";
import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import Framework from "../components/Home/frameworks";
import Service from "../components/Home/Service";

function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Card />
      <Framework />
    </>
  );
}

export default Home;
