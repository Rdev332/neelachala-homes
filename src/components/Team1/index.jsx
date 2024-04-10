import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Team = (props) => {
  return (
    <section className="services-gridsection-padding mb-50">
      <div className="container">
        <div className="main-header text-center mb-20">
          <h3>Team</h3>
          <div className="tex-bg">Leaders</div>
        </div>
        <div className="row">
          {props.team.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
              >
                <LazyLoadImage
                  className="mt-30"
                  src={item.profile_photo?.data?.attributes?.url}
                  alt="profile photo"
                />
                <div className="row mt-20 align-items-center">
                  <h6
                    style={{
                      marginRight: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    {item.name}
                  </h6>
                  <Link legacyBehavior href={item.linkedin ?? "#"}>
                    <a className="fab fa-linkedin-in"></a>
                  </Link>
                </div>
                <p>{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
