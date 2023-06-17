/* eslint-disable @next/next/no-img-element */
import React,{useEffect} from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
 useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items theaters">
            <Link href="/project-details?name=HN_Paradise">
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
            <div className="col-lg-6 items residential interior">
              <Link href="/project-details?name=Jagannath_Enclave">
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
            <div className="col-lg-6 items interior">
              <Link href="/project-details?name=Mahalaxmi_Niwas">
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
            <div className="col-lg-6 items residential">
              <Link href="/project-details?name=Narayan_Enclave">
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
            <div className="col-lg-6 items theaters">
              <Link href="/project-details?name=Neelachala_Lagoon">
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
            <div className="col-lg-6 items residential">
              <Link href="/project-details?name=Spacetown">
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
            <div className="col-lg-6 items theaters">
              <Link href="/project-details?name=Subhadra_Residency">
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
