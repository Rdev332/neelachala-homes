/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const AccessProjects = ({ projects }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);


  return (
    <>
      <section className="works filter-img four-col section-padding">
        <div className="container-fluid">
          <div className="row gallery">
            {projects.map((project, index) => {
              return (
                <div className="col-lg-4 col-md-6 items theaters" key={index}
                  style={{ cursor: "pointer" }}
                >
                  <Link legacyBehavior href={`/access-project-details?name=${project?.slug?.toLowerCase()
                    }`}
                  >
                    <div className="item">
                      <div className="img">
                        <img src={project?.main_photo?.data?.attributes?.url} alt={project?.name} />
                      </div>
                      <div className="cont">
                        <h5>
                          {project?.name}
                        </h5>
                        <span>{project?.location}</span>
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

export default AccessProjects;
