/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PostDetails = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Build a Beautiful Blog With Ease</h2>
                  <div className="info">
                    <p>
                      <Link legacyBehavior href="#">Alex Smith</Link>/
                      <Link legacyBehavior href="#">August 6 , 2022</Link>/
                      <Link legacyBehavior href="#">Web Design</Link>
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <LazyLoadImage
                    src="/assets/img/blog/single.jpg"
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                            Never ever think of giving up. Winners never quit
                            and quitters never win. Take all negative words out
                            of your mental dictionary and focus on the solutions
                            with utmost conviction and patience. The battle is
                            never lost until you&apos;ve abandon your vision.
                          </p>
                        </div>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment for self esteem is that it
                          needs be nurturing. The main component of a healthy
                          env for self esteem The main compont be nurturing It
                          should provide unconditional warmth. The main
                          component of a healthy env for self esteem The main
                          compont be nurturing It should provide unconditional
                        </p>

                        <h6>- We all intend to plan ahead.</h6>

                        <p>
                          We all intend to plan ahead, but too often let the
                          day-to-day minutia get in the way of making a calendar
                          for the year. Sure, you can&apos;t know every detail
                          to anticipate. Heck, you can&apos;t know half the
                          priorities that will pop up in any particular month.
                          But you can plan for big picture seasonality,
                          busy-times, and events.
                        </p>

                        <ul>
                          <li>
                            <span>01</span> Integer in volutpat libero.
                          </li>
                          <li>
                            <span>02</span> Vivamus maximus ultricies pulvinar.
                          </li>
                          <li>
                            <span>03</span> priorities that will pop up in any
                            particular month.
                          </li>
                          <li>
                            <span>04</span> We all intend to plan ahead.
                          </li>
                          <li>
                            <span>05</span> The main component of a healthy env
                            for self esteem.
                          </li>
                        </ul>

                        <div className="quotes text-center">
                          <p>
                            Never ever think of giving up. Winners never quit
                            and quitters never win. Take all negative words out
                            of your mental dictionary and focus on the solutions
                            with utmost conviction and patience. The battle is
                            never lost until you&apos;ve abandon your vision.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-10">
                              <LazyLoadImage src="/assets/img/blog/single.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-10">
                              <LazyLoadImage src="/assets/img/blog/single.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        <p>
                          We all intend to plan ahead, but too often let the
                          day-to-day minutia get in the way of making a calendar
                          for the year. Sure, you can&apos;t know every detail
                          to anticipate. Heck, you can&apos;t know half the
                          priorities that will pop up in any particular month.
                          But you can plan for big picture seasonality,
                          busy-times, and events.
                        </p>
                        <div className="share-info">
                          <div className="social">
                            <Link legacyBehavior href="#">
                              <a>
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </Link>
                            <Link legacyBehavior href="#">
                              <a>
                                <i className="fab fa-twitter"></i>
                              </a>
                            </Link>
                            <Link legacyBehavior href="#">
                              <a>
                                <i className="fab fa-behance"></i>
                              </a>
                            </Link>
                          </div>
                          <div className="tags">
                            <Link legacyBehavior href="#">Web</Link>,
                            <Link legacyBehavior href="#">Themeforest</Link>,
                            <Link legacyBehavior href="#">ThemesCamp</Link>
                          </div>
                        </div>
                      </div>
                      <div className="author">
                        <div className="author-img">
                          <LazyLoadImage src="/assets/img/blog/01.jpg" alt="" />
                        </div>
                        <div className="info">
                          <h6>
                            <span>author :</span> Jorden Griffin
                          </h6>
                          <p>
                            the main component of a healthy environment for self
                            esteem is that it needs be nurturing. The main
                            compont of a healthy environment.
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination">
                  <span>
                    <Link legacyBehavior href="#">Prev Post</Link>
                  </span>
                  <span className="icon">
                    <Link legacyBehavior href="#">
                      <a>
                        <i className="fas fa-th-large"></i>
                      </a>
                    </Link>
                  </span>
                  <span className="text-right">
                    <Link legacyBehavior href="#">Next Post</Link>
                  </span>
                </div>

                <div className="comments-area">
                  <h5>Comments :</h5>
                  <div className="item">
                    <div className="comment-img">
                      <LazyLoadImage src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link legacyBehavior href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item relped">
                    <div className="comment-img">
                      <LazyLoadImage src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link legacyBehavior href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="comment-img">
                      <LazyLoadImage src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link legacyBehavior href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="comment-form">
                  <h5>Add Comment :</h5>
                  <div className="form">
                    <form action="">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea placeholder="Your Comment"></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button className="btn-curve btn-blc btn-lg">
                              <span>Submit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
