import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import  getAboutUsPageData  from "../api/about-us";
import getFooterData from "../api/getFooterData";

const About = ({data,footerData}) => {
  console.log(data)
  const {url} = data.data.attributes.header_image.data.attributes
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout data={footerData}>
      <PageHeader
        title="About Us"
        image={url}
      />
      <AboutUs4 data={data.data.attributes}/>
      <Services3 bigTitle grid services={data.data.attributes.features}/>
    </MainLayout>
  );
};

export default About;




// getServersideProps
export const getStaticProps = async () => {
  const [data,footerData] = await Promise.all([getAboutUsPageData(),getFooterData()])
  return {
    props: {
      data,
      footerData
    },
  };
}