/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import Amenities from "../../components/Amenities";
import getAllProjects from "../api/getAllProjects";
import { useRouter } from "next/router";
import getFooterData from "../api/getFooterData";
import ModalImage from "react-modal-image";

const ProjectDetails = ({ projects, footerData }) => {
  const router = useRouter();
  const project = projects?.data?.filter(
    (project) =>
      project.attributes?.slug?.toLowerCase() ===
      router?.query?.name?.toLowerCase()
  )[0];
  const {
    name,
    main_photo,
    photos,
    description,
    flat_type,
    construction_area,
    number_of_flats,
    cctv,
    elevator,
    parking,
    play_area,
    rcc_structure,
    security,
    map,
    location,
  } = project?.attributes ?? {};

  console.log(map);

  const amenities = [];
  if (cctv) amenities.push({ id: "cctv", title: "CCTV" });
  if (elevator) amenities.push({ id: "elevator", title: "Elevator" });
  if (parking) amenities.push({ id: "parking", title: "Parking" });
  if (play_area) amenities.push({ id: "play_area", title: "Play Area" });
  if (rcc_structure)
    amenities.push({ id: "rcc_structure", title: "RCC Structure" });
  if (security) amenities.push({ id: "security", title: "Security" });

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout data={footerData}>
      <PageHeader title={name} image={main_photo?.data?.attributes?.url} />
      <ProjectIntro
        description={description}
        details={{
          flatType: flat_type,
          constructionArea: construction_area,
          numberOfFlats: number_of_flats,
          map: map,
          location: location,
        }}
      />
      <Amenities amenities={amenities} />
      {photos?.data?.length && (
        <section className="projdtal">
          <div className="justified-gallery">
            <div className="row">
              {photos?.data.map((photo, index) => (
                <div
                  className={
                    photos?.data?.length === 1
                      ? "col-lg-12 col-xl-12 col-md-12"
                      : photos?.data?.length === 2
                      ? "col-lg-6 col-xl-6 col-md-6"
                      : photos?.data?.length === 3
                      ? "col-lg-4 col-xl-4 col-md-6"
                      : photos?.data?.length === 4
                      ? "col-lg-3 col-xl-3 col-md-6"
                      : photos?.data?.length === 5
                      ? "col-lg-3 col-xl-3 col-md-6"
                      : "col-lg-2 col-xl-2 col-md-6"
                  }
                  key={index}
                >
                  <ModalImage
                    className="img"
                    small={photo?.attributes?.formats?.large.url}
                    large={photo?.attributes?.formats?.large.url}
                    medium={photo?.attributes?.formats?.large.url}
                    alt={photo?.attributes?.name}
                    sx={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ProjectDetails;

export const getStaticProps = async () => {
  const [projects, footerData] = await Promise.all([
    getAllProjects(),
    getFooterData(),
  ]);
  return {
    props: {
      projects,
      footerData,
    },
    revalidate: 60 * 15,
  };
};
