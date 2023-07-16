/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import getAllProjects from "../api/getAllProjects";
import { useRouter } from 'next/router'

const ProjectDetails = ({ projects }) => {
  const router = useRouter()
  const project = projects?.data?.filter((project) => project.attributes?.slug?.toLowerCase() === router?.query?.name?.toLowerCase())[0]
  const { name, main_photo, photos, description } = project?.attributes ?? {}

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title={name}
        image={main_photo?.data?.attributes?.url}
      />
      <ProjectIntro description={description} />
      {photos?.data?.length && <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {
              photos?.data.map((photo, index) => (
                <div className={
                  photos?.data?.length === 1 ? "col-lg-12 col-xl-12 col-md-12" :
                    photos?.data?.length === 2 ? "col-lg-6 col-xl-6 col-md-6" :
                      photos?.data?.length === 3 ? "col-lg-4 col-xl-4 col-md-6" :
                        photos?.data?.length === 4 ? "col-lg-3 col-xl-3 col-md-6" :
                          photos?.data?.length === 5 ? "col-lg-3 col-xl-3 col-md-6"
                            : "col-lg-2 col-xl-2 col-md-6"
                } key={index}>
                  <img alt="" src={photo?.attributes?.url} />
                </div>
              ))

            }
          </div>
        </div>
      </section>}
    </MainLayout>
  );
};

export default ProjectDetails;


export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  }
}