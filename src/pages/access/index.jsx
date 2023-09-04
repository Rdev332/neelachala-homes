/* eslint-disable @next/next/no-img-element */
import React from "react";
import getFooterData from "../api/getFooterData";
import getAccessPageData from "../api/getAccessPageData";
import LightLayout from "../../layouts/light";
import SkillsCircle from "../../components/Skills-Circle";
import Portfolio1 from "../../components/Portfolio1";

const Access = ({ footerData, data }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const { header_image, header_title, header_description, access_projects } = data.data.attributes;
  const banner = {
    title: header_title,
    description: header_description,
    background_image: header_image,
  }
  return (
    <LightLayout
      footerClass={"mt-30"} footerData={footerData}>
      <SkillsCircle banner={banner} />
      <Portfolio1 projects={access_projects} />
    </LightLayout>
  );
};

export default Access;

// getServersideProps
export const getStaticProps = async () => {
  const [footerData, data] = await Promise.all([
    getFooterData(),
    getAccessPageData(),
  ]);
  return {
    props: {
      footerData,
      data
    },
    revalidate: 60 * 60,
  };
};
