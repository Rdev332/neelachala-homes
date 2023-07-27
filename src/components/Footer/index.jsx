/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText, data }) => {
  const { office_address, phone_number_1, phone_number_2, info_email, bussiness_enquire_email, google_maps_link } = data

  return (
    <footer
      id="home_footer"
      className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Office Address</h6>
                    <a href={google_maps_link} target="_blank">
                      <p>
                        {office_address}
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <a href={`mailto:${info_email}`}>
                      <p>{info_email}</p>
                    </a>
                    <a href={`mailto:${bussiness_enquire_email}`}>
                      <p>{bussiness_enquire_email}</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <a href={`tel:${phone_number_1}`}>
                      <p>{phone_number_1}</p>
                    </a>
                    <a href={`tel:${phone_number_2}`}>
                      <p>{phone_number_2}</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/dagjy96pi/image/upload/v1689964975/logo_horizontal_4ad3068563.png"
                  alt="logo"
                />
              </div>
              <div className="social">
                <Link legacyBehavior href="https://www.facebook.com/neelachalahomes?mibextid=ZbWKwL">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                {/* <Link legacyBehavior href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link> */}
                <Link legacyBehavior href="https://www.instagram.com/_neelachalahomes_/?igshid=YmMyMTA2M2Y%3D">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                {/* <Link legacyBehavior href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
              </div>
              <div className="copy-right">
                <p>
                  ©<span>{new Date().getFullYear()}</span> All Rights Reserved
                  by Neelachala Homes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
