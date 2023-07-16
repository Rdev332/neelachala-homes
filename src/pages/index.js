import HomePage from "../components/home";
import getAllProjects from "./api/getAllProjects";

export default function Home({projects}) {
  return <HomePage projects={projects}/>;
}


// getServersideProps
export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
}