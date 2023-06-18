import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        image="/assets/img/portfolio/mas/Mahalaxmi_Niwas.jpg"
      />
      <AboutUs4 />
      <Services3 bigTitle grid />
    </MainLayout>
  );
};

export default About;
