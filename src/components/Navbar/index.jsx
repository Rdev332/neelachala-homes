/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  const router = useRouter();

  const LinkButton = ({ href, children }) => {
    return (
      <div style={{ cursor: "pointer" }} onClick={() => router.push(href)}>
        {children}
      </div>
    )
  }

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <LinkButton href="/">
            <div className={`logo ${logoClass && logoClass}`}>
              <img src="https://res.cloudinary.com/dagjy96pi/image/upload/v1689964975/logo_white_write_4597a9bd15.png" alt="logo" ref={logoRef}
                style={{
                  width:
                    "160px"
                }}
              />
            </div>
          </LinkButton>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <LinkButton href="/about">
                  <div className="nav-link">About Us</div>
                </LinkButton>
              </li>
              <li className="nav-item">
                <LinkButton href="/portfolio">
                  <div className="nav-link">Portfolio</div>
                </LinkButton>
              </li>
              <li className="nav-item">
                <LinkButton href="/contact">
                  <div className="nav-link">Contact</div>
                </LinkButton>
              </li>
              <li className="nav-item">
                <LinkButton href="/blogs">
                  <div className="nav-link">Blogs</div>
                </LinkButton>
              </li>
              <li className="nav-item">
                <LinkButton href="/access">
                  <div className="nav-link">Access</div>
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
