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
        logo.setAttribute("src", "https://res.cloudinary.com/dagjy96pi/image/upload/v1707388736/favicon_589e3a78b2.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "https://res.cloudinary.com/dagjy96pi/image/upload/v1707388736/favicon_589e3a78b2.png");
      }
    });
  }, [navbarRef]);

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
        {/* <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="u7Rbx1"
          defer
        >
        </script> */}
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="JjqAk6"
          defer
        >
        </script>
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} data={footerData.data?.attributes ?? {}} />
    </div>
  );
};

export default LightLayout;
