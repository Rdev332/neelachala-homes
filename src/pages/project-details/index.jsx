/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";

import { projects } from "../../data/projects";

const ProjectDetails = () => {

  const router = useRouter();
  const { name } = router.query;
  console.log(name);

  const project = projects[name]
  console.log(project);

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title={project?.name}
        image={project?.hero_image}
      />
      <ProjectIntro project={project} />
      {project?.others?.length && <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {
              project.others.map((other, index) => (
                <div className={
                  project.others.length === 1 ? "col-lg-12 col-xl-12 col-md-12" :
                    project.others.length === 2 ? "col-lg-6 col-xl-6 col-md-6" :
                      project.others.length === 3 ? "col-lg-4 col-xl-4 col-md-6" :
                        project.others.length === 4 ? "col-lg-3 col-xl-3 col-md-6" :
                          project.others.length === 5 ? "col-lg-3 col-xl-3 col-md-6"
                            : "col-lg-2 col-xl-2 col-md-6"
                } key={index}>
                  <img alt="" src={other} />
                </div>
              ))

            }
          </div>
        </div>
      </section>}
    </MainLayout>
  );
};

export default ProjectDetails;
