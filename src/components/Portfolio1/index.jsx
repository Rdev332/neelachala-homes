import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio1 = ({ projects }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="portfolio section-padding pt-100">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head text-center">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <h6 className="wow fadeInDown" data-wow-delay=".3s">
                    Affordable living, closer than you think!
                  </h6>
                  <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                    Access Portfolio
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="gallery twsty full-width">
              {projects.map((project, index) => (
                <div
                  key={project?.slug ?? index}
                  className={`items mt-30 wow fadeInUp`}
                  data-wow-delay=".3s"
                >
                  <div
                    className="item-img bg-img wow imago"
                    style={{
                      backgroundImage: `url(${project?.main_photo?.data?.attributes?.url})`,
                    }}
                  >
                    <Link legacyBehavior href="/project-details">
                      <a>
                        <div className="item-img-overlay valign"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="info mt-10">
                    <h5>{project?.name}</h5>
                    <span>{project?.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio1;
