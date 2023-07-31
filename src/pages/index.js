import HomePage from "../components/home";
import getAllProjects from "./api/getAllProjects";
import getFooterData from "./api/getFooterData";
import getHomePageData from "./api/getHomePageData";

export default function Home({ projects, data, footerData }) {
  return <HomePage projects={projects} data={data} footerData={footerData} />;
}


// getServersideProps
export const getStaticProps = async (context) => {
  const { hostname, subdomain } = getHostAndSubdomain(context?.req?.headers?.host);
  console.log("hostname", hostname);
  console.log("subdomain", subdomain);

  const [projects, data, footerData] = await Promise.all([getAllProjects(), getHomePageData(), getFooterData()])
  return {
    props: {
      projects,
      data,
      footerData
    },
  };
}

const getHostAndSubdomain = (host) => {
  try {
    const hostname = host.split(":")[0];
    const subdomain = hostname.split(".")[0];
    return { hostname, subdomain };
  } catch (e) {
    console.log("error", e?.message)
    return { hostname: "", subdomain: "" };
  }
}