/* eslint-disable @next/next/no-img-element */
import React from "react";
import thumparallaxUp from "../../common/thumparallaxUp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactMarkdown from "react-markdown";

const PostDetails = ({ blog }) => {
  const {
    content,
    published,
    title,
    post_image,
  } = blog?.attributes ?? {}

  const url = post_image?.data.attributes.url ?? ""

  const date = new Date(published).toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  return (
    <section className="blog-pg single section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="title-head">
                <h2>{title}</h2>
                <div className="info">
                  <p>
                    {date}
                  </p>
                </div>
              </div>
              <div className="img main-img">
                <LazyLoadImage
                  src={url}
                  alt={title}
                  className="thumparallax"
                />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <ReactMarkdown>
                        {content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
