import React from "react";

const features = [
  {
    id: 1,
    title: "Affordable",
    icon: "/assets/img/access/affordable.png",
  },
  {
    id: 2,
    title: "Quality",
    icon: "/assets/img/access/quality.png",
  },
  {
    id: 3,
    title: "Sustainable",
    icon: "/assets/img/access/sustainable.png",
  },
  {
    id: 4,
    title: "Inclusive",
    icon: "/assets/img/access/inclusive.png",
  },
];

const SkillsCircle = () => {
  const cpStyle = {
    path: {
      stroke: "#b19777",
    },
    trail: {
      stroke: "#0f1013",
    },
    text: {
      fill: "#ffffff",
      fontSize: "16px",
    },
  };
  return (
    <section
      className="skills-circle section-padding bg-img parallaxie"
      style={{ backgroundImage: "url(/assets/img/access/access-bg.jpg)" }}
      data-overlay-dark="7"
    >
      <div className="container">
        <div className="section-head text-center mb-40">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                Coming Soon!
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Neelachala Access
              </h4>
              <p>Every family deserves a home. 'Access' makes it possible.</p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          {features.map((feature) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={feature.id}>
              <div className="skill-icon">
                <img src={feature.icon} alt="icon" />
              </div>
              <div className="skill-content">
                <h5>{feature.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <a
            className="btn-curve btn-bord btn-lit mt-40">
            <span>Learn more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
