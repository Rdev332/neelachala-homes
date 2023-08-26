import React from "react";
import MainLayout from "../../layouts/main";
import PostDetails from "../../components/Post-details";
import getAllBlogs from '../api/blogs'
import { useRouter } from "next/router";

const BlogDetails = ({ allBlogs }) => {
  const { data: blogs } = allBlogs;
  console.log(blogs)
  const router = useRouter()

  const blog = blogs.find(blog => blog.attributes.slug === router.query.slug)

  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PostDetails blog={blog} />
    </MainLayout>
  );
};

export default BlogDetails;

export const getStaticProps = async () => {
  const allBlogs = await getAllBlogs();
  return {
    props: {
      allBlogs,
    },
  };
};

