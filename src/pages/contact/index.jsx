import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";

const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Contact Us"
        image="/assets/img/portfolio/mas/Nspacetown.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
