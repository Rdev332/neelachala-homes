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
          <div className="row gallery">
            {Object.keys(projects).map((key, index) => {
              const project = projects[key];

              return (
                <div className="col-lg-4 col-md-6 items theaters" key={index}>
                  <Link legacyBehavior href={`/project-details?name=${key}`}>
                    <div className="item">
                      <div className="img">
                        <img src={project.hero_image} alt={project.name} />
                      </div>
                      <div className="cont">
                        <h5>
                          {project.name}
                        </h5>
                        <span>{project.location}</span>
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
