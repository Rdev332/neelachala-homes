/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkFourColumn = ({projects}) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  console.log(projects)
  return (
    <>
      <section className="works filter-img four-col section-padding">
        <div className="container-fluid">
          <div className="row gallery">
            {projects.map((project, index) => {
              return (
                <div className="col-lg-4 col-md-6 items theaters" key={index}>
                  <Link legacyBehavior href={`/project-details?name=${
                    project.attributes?.name?.replace(/\s+/g, '_').toLowerCase()
                  }`}>
                    <div className="item">
                      <div className="img">
                        <img src={project.attributes?.main_photo?.data?.attributes?.url} alt={project.attributes?.name} />
                      </div>
                      <div className="cont">
                        <h5>
                          {project.attributes?.name}
                        </h5>
                        <span>{project.attributes?.location}</span>
                        {/* <span>Modern</span> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFourColumn;
