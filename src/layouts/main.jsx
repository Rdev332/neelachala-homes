/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import FacebookPixel from "../components/FacebookPixel";

const MainLayout = ({ children, logoClassText, data }) => {
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
        logo.setAttribute("src", "/assets/img/logo.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo.png");
      }
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Navbar
        navbarRef={navbarRef}
        logoRef={logoRef}
        logoClass={logoClassText}
      />
      {children}
      <FacebookPixel />
      <Footer data={data?.data?.attributes ?? {}} />
    </>
  );
};

export default MainLayout;
