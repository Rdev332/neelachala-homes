/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkTwoColumn = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works section-padding pb-0 pt-0">
        <div className="container">
          <div className="section-head text-center mb-0">
            <div className="row justify-content-center"
            >
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="wow fadeInDown" data-wow-delay=".3s">
                  Best Works
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Portfolio
                </h4>
              </div>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=HN_Paradise">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/HN_Paradise.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      HN Paradise
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=Jagannath_Enclave">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/Jagannath_Enclave.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      Jagannath Enclave
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=Mahalaxmi_Niwas">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/Mahalaxmi_Niwas.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      Mahalaxmi Niwas
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=Narayan_Enclave">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/Narayan_Enclave.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      Narayan Enclave
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=Neelachala_Lagoon">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/Neelachala_LAgoon2.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      Neelachala Lagoon
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=Spacetown">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/Spacetown.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      Spacetown
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 items">
              <Link legacyBehavior href="/project-details?name=Subhadra_Residency">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/portfolio/mas/Subadhra_Residency.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      Subhadra Residency
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTwoColumn;