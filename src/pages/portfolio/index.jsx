/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";
import getAllProjects from "../api/getAllProjects";

const Portfolio = ({
  projects,
}) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Our work",
          second: "Portfolio",
        }}
        content="We are a team of professionals who are passionate about what we do. We are committed to excellence and timely delivery of projects. We are a team of professionals who are passionate about what we do. We are committed to excellence and timely delivery of projects."
      />
      <WorkFourColumn projects={projects.data}/>
    </MainLayout>
  );
};

export default Portfolio;


// getServersideProps
export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
}