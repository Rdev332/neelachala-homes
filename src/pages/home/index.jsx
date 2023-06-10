/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import VideoHero from "../../components/Video-Hero";
import LightLayout from "../../layouts/light";
import Testimonials from "../../components/Testimonials1";
import Contact from "../../components/Contact";
import {WorkTwoColumn} from "../../components/Work-Two-Column";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <VideoHero />
      <AboutUs1 />
      {/* <Services1 /> */}
      <WorkTwoColumn />
      {/* <SkillsCircle /> */}
      <Testimonials />
      {/* <Team1 /> */}
      {/* <Blogs1 /> */}
      <Contact />
    </LightLayout>
  );
};

export default Home1;
