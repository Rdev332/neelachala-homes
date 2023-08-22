/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const LightLayout = ({ children, footerClass, footerData }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "https://res.cloudinary.com/dagjy96pi/image/upload/v1689964974/logo_437a2bd646.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "https://res.cloudinary.com/dagjy96pi/image/upload/v1689964975/logo_white_write_4597a9bd15.png");
      }
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} data={footerData.data.attributes} />
    </>
  );
};

export default LightLayout;
