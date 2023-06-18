/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
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
                    <h6>Officeal Address</h6>
                    <p>
                      N-5/237 I.R.C. Village, Nayapalli Bhubaneswar-751015
                      Odisha
                    </p>
                    
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@neelachalahomes.com</p>
                    <p>businessenquiry@neelachalahomes.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91-674-2362297</p>
                    <p>+91-8249434141</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img
                  src="/assets/img/logo-horizontal.png"
                  alt="logo"
                />
              </div>
              <div className="social">
                <Link href="https://www.facebook.com/neelachalahomes?mibextid=ZbWKwL">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/_neelachalahomes_/?igshid=YmMyMTA2M2Y%3D">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link>
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
