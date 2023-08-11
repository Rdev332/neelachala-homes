/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../About-Us1";
import VideoHero from "../Video-Hero";
import LightLayout from "../../layouts/light";
import Testimonials from "../Testimonials1";
import Contact from "../Contact";
import WorkTwoColumn from "../Work-Two-Column";
import PromotionPopup from "../Promotion-Popup";
import SkillsCircle from "../Skills-Circle";

const Home1 = ({ projects, data, footerData }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  const { header_video, header } = data.data?.attributes ?? {}

  return (
    <LightLayout
      footerClass={"mt-30"} footerData={footerData}>
      <VideoHero header_video={header_video} header={header} />
      <AboutUs1 data={data.data?.attributes} />
      <SkillsCircle />
      <WorkTwoColumn projects={projects?.data} />
      <Testimonials testimonials={data.data?.attributes.testimonials} />
      <Contact
        footerData={footerData.data?.attributes}
      />
      <PromotionPopup data={data.data?.attributes.promotionPopup} />
    </LightLayout>
  );
};

export default Home1;


