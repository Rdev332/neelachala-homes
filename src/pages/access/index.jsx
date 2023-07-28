/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import AccessProjects from "../../components/Work-Four-Column/accessProjects";
import getFooterData from "../api/getFooterData";
import getAccessPageData from "../api/getAccessPageData";

const Access = ({ footerData, data }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);


  const { header_image, header_title, header_description, access_projects } = data.data.attributes;

  return (
    <MainLayout data={footerData}>
      <WorkHeader
        center
        title={{
          first: header_title.split(" ")[0].concat(" ").concat(header_title.split(" ")[1]),
          second: header_title.split(" ")[2],
        }}
        content={header_description}
        headerImage={header_image}
      />
      <AccessProjects projects={access_projects} />
    </MainLayout>
  );
};

export default Access;

// getServersideProps
export const getStaticProps = async () => {
  const [footerData, data] = await Promise.all([
    getFooterData(),
    getAccessPageData()
  ]);
  return {
    props: {
      footerData,
      data
    },
  };
};
