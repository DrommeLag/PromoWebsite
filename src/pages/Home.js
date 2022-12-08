import React from "react";
import Features from "../components/home_page/Features";
import Intro from "../components/home_page/Intro";
import NavBar from "../components/nav/NavBar";
import NavFooter from "../components/nav/NavFooter";

function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Features />
      <NavFooter />
    </>
  );
}

export default Home;
