/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blogs.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {Blog1Data.map((item) => (
                  <div className="item mb-80" key={item.id}>
                    <div className="img">
                      <Link href="/blog-details">
                        <img src={item.image} alt="" className="thumparallax" />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="date">
                        <h5>
                          <Link href="/blog-details">
                            <span className="num">{item.date2[1]}</span>
                            <span>{item.date2[0]}</span>
                          </Link>
                        </h5>
                      </div>
                      <div className="cont">
                        <div className="tags">
                          <Link href="#">WordPress</Link>
                          <Link href="#">Themeforest</Link>
                          <Link href="#">Archo</Link>
                        </div>
                        <h4 className="title">
                          <Link href="/blog-details">
                            Build a Beautiful Blog With Ease
                          </Link>
                        </h4>
                        <p>
                          Success is no accident. It is hard work, perseverance,
                          learning, studying, sacrifice and most of all, love of
                          what you are doing.
                        </p>
                        <Link href="/blog-details" className="more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                  <span className="active">
                    <Link href="#">1</Link>
                  </span>
                  <span>
                    <Link href="#">2</Link>
                  </span>
                  <span>
                    <Link href="#">
                      <i className="fas fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
