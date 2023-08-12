/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link legacyBehavior href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src="https://res.cloudinary.com/dagjy96pi/image/upload/v1689964975/logo_white_write_4597a9bd15.png" alt="logo" ref={logoRef}
                style={{
                  width:
                    "160px"
                }}
              />
            </a>
          </Link>

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
                <Link legacyBehavior href="/about">
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/portfolio">
                  <a className="nav-link">Portfolio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/access">
                  <a className="nav-link">Access</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
