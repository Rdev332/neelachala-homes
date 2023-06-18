/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { projects } from "../../data/projects";

const WorkFourColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  return (
    <>
      <section className="works filter-img four-col section-padding">
        <div className="container-fluid">
          {/* <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".interior">Interior</span>
              <span data-filter=".theaters">Theaters</span>
              <span data-filter=".residential">Residential</span>
            </div>
          </div> */}
          <div className="row gallery">
            {Object.keys(projects).map((key, index) => {
              const project = projects[key];

              return (
                <div className="col-lg-4 col-md-6 items theaters" key={index}>
                  <div className="item">
                    <div className="img">
                      <img src={project.hero_image} alt={project.name} />
                    </div>
                    <div className="cont">
                      <h5>
                        <Link href={`/project-details?name=${key}`}>
                          {project.name}
                        </Link>
                      </h5>
                      <span>{project.location}</span>
                      {/* <span>Modern</span> */}
                    </div>
                  </div>
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
