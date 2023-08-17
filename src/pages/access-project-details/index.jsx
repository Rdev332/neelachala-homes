/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import getFooterData from "../api/getFooterData";
import getAccessPageData from "../api/getAccessPageData";
import { useRouter } from 'next/router'
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectDetails = ({ accessData, footerData }) => {
  const router = useRouter()
  const project = accessData?.data?.attributes?.access_projects?.filter((project) => project?.slug?.toLowerCase() === router?.query?.name?.toLowerCase())[0]

  const { name, main_photo, photos, description } = project ?? {}

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout data={footerData}>
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
                  <LazyLoadImage alt="" src={photo?.attributes?.url} />
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
  const [accessData, footerData] = await Promise.all([getAccessPageData(), getFooterData()]);
  return {
    props: {
      accessData,
      footerData
    },
  }
}