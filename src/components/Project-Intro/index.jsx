import React from "react";
import Link from "next/link";

const ProjectIntro = ({ project }) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
                {project?.description}
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link legacyBehavior href="#">Envato.com</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>6 August 2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link legacyBehavior href="#">Web Design </Link>,
                <Link legacyBehavior href="#">WordPress</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link legacyBehavior href="#">Minimal</Link> , <Link legacyBehavior href="#">Modern</Link> ,
                <Link legacyBehavior href="#">Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
