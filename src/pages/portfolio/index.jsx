/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";
import getAllProjects from "../api/getAllProjects";
import getPortfolioPageData from "../api/portfolio";
import getFooterData from "../api/getFooterData";

const Portfolio = ({ projects, data, footerData }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);


  const { header_image, header_title, header_content } = data.data.attributes;

  return (
    <MainLayout data={footerData}>
      <WorkHeader
        center
        title={{
          first: header_title.split(" ")[0].concat(" ").concat(header_title.split(" ")[1]),
          second: header_title.split(" ")[2],
        }}
        content={header_content}
        headerImage={header_image}
      />
      <WorkFourColumn projects={projects.data} />
    </MainLayout>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const [projects, data, footerData] = await Promise.all([
    getAllProjects(),
    getPortfolioPageData(),
    getFooterData()
  ]);
  return {
    props: {
      projects,
      data,
      footerData
    },
    revalidate: 60 * 15,
  };
};
