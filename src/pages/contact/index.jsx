import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import getFooterData from "../api/getFooterData"


const Contact = ({ data }) => {

  const { contact_us_page_header_image, map_iframe } = data.data.attributes;
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout data={data.data.attributes}>
      <PageHeader
        title="Contact Us"
        image={contact_us_page_header_image.data.attributes.url}
      />
      <section className="contact">
        <ContactInfo data={data.data.attributes} />
        <ContactWithMap iframeLink={map_iframe} />
      </section>
    </MainLayout>
  );
};

export default Contact;



// getServersideProps
export const getStaticProps = async () => {
  const data = await getFooterData()
  return {
    props: {
      data
    },
  };
}