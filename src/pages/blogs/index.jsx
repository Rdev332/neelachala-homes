import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import BlogsList from '../../components/Blogs-List'
import getAllBlogs from '../api/blogs'
import getFooterData from "../api/getFooterData"

const Blogs = ({ allBlogs, footerData }) => {

  const { data: blogs } = allBlogs

  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout
      data={footerData}
    >
      {/* <PageHeader
        title="Our Blogs"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
        ]}
        image={"/assets/img/patern.png"}
      /> */}
      <BlogsList blogs={blogs} />
    </MainLayout>
  );
}

export default Blogs;

export const getStaticProps = async () => {
  const [allBlogs, footerData] = await Promise.all([getAllBlogs(), getFooterData()])

  return {
    props: {
      allBlogs,
      footerData
    },
  };
};

