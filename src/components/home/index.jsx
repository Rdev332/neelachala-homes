/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../About-Us1";
import VideoHero from "../Video-Hero";
import LightLayout from "../../layouts/light";
import Testimonials from "../Testimonials1";
import Contact from "../Contact";
import WorkTwoColumn from "../Work-Two-Column";

const Home1 = ({projects}) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <VideoHero />
      <AboutUs1 />
      <WorkTwoColumn projects={projects?.data}/>
      <Testimonials />
      <Contact />
    </LightLayout>
  );
};

export default Home1;


