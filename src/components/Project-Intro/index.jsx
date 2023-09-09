import React from "react";
import Link from "next/link";

const ProjectIntro = ({ description, details }) => {
  const { flatType, constructionArea, numberOfFlats } = details ?? {};

  return (
    <section className="intro-section section-padding pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="htit">
              <h4>Introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-9 mb-30">
            <div className="text">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="numbers">
          <div className="row">
            <div className="col-sm-4">
              <div className="item mb-10">
                <h3>
                  <span className="nbr playfont">
                    {flatType?.split("BHK")[0]}
                  </span>
                  <span className="nbr playfont" style={{ fontSize: "1.5rem" }}>
                    BHK
                  </span>
                </h3>
                <h6>Flat Type</h6>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="item mb-10">
                <h3>
                  <span className="nbr playfont">{constructionArea}</span>
                  <span className="nbr playfont" style={{ fontSize: "1.5rem" }}>
                    sq.ft
                  </span>
                </h3>
                <h6>Construction Area</h6>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="item mb-10">
                <h3>
                  <span className="nbr playfont">{numberOfFlats}</span>
                </h3>
                <h6>Number of Flats</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
