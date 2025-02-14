import "../../../style/style.css";
import CommentIcon from "@mui/icons-material/Comment";
import CallMadeIcon from "@mui/icons-material/CallMade";
import blogStore from "../../../store/blogStore";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogList, getBlogs, loading } = blogStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBlogs(search);
  }, [search]);

  return (
    <div className="main-bg">
      <header
        className="page-header bg-img section-padding valign"
        style={{
          backgroundImage: "url('/assets/imgs/background/bg4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-overlay-dark="8"
      >
        <div className="container pt-80 mx-auto">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-u ls1 fz-80">
                  Blog <span className="fw-200"> Standard</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="blog-main section-padding">
        <div className="container mx-auto">
          <div className="flex row lg-marg justify-content-around">
            <div className="col-lg-8 flex-[2] ">
              <div className="md:mb-80">
                {loading && <Spinner size="md" />}
                <div className="item mb-80">
                  <div className="img">
                    <img src="/assets/imgs/blog/blog1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="flex items-center mb-15">
                      <div className="post-date">20 July 2020</div>
                      <div className="commt opacity-7 fz-13">
                        <span className="ti-comment-alt mr-10"></span>{" "}
                        <CommentIcon className="mr-10" /> 4 Comments
                      </div>
                    </div>
                    <h3 className="mb-15">
                      <a href="/blog-details">
                        12 Tips to Leading an{" "}
                        <span className="fw-200">Extraordinary</span>
                        Company
                      </a>
                    </h3>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing.
                    </p>
                    <Link
                      to={`/blog/1234`}
                      className="d-flex align-items-center main-color mt-40"
                    >
                      <span className="text mr-15">Read More</span>
                      <span className="ti-arrow-top-right"></span>
                      <CallMadeIcon />
                    </Link>
                  </div>
                </div>
                <div className="item mb-80">
                  <div className="img">
                    <img src="/assets/imgs/blog/blog2.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center mb-15">
                      <div className="post-date">20 July 2020</div>
                      <div className="commt opacity-7 fz-13">
                        <span className="ti-comment-alt mr-10"></span>4 Comments
                      </div>
                    </div>
                    <h3 className="mb-15">
                      <a href="/blog-details">
                        Digital Marketing for{" "}
                        <span className="fw-200">Online Business.</span>
                      </a>
                    </h3>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing.
                    </p>
                    <a
                      href="/blog-details"
                      className="d-flex align-items-center main-color mt-40"
                    >
                      <span className="text mr-15">Read More</span>
                      <span className="ti-arrow-top-right"></span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src="/assets/imgs/blog/blog4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center mb-15">
                      <div className="post-date">20 July 2020</div>
                      <div className="commt opacity-7 fz-13">
                        <span className="ti-comment-alt mr-10"></span>4 Comments
                      </div>
                    </div>
                    <h3 className="mb-15">
                      <a href="/blog-details">
                        12 Tips to Leading an{" "}
                        <span className="fw-200">Extraordinary</span>
                        Company
                      </a>
                    </h3>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing.
                    </p>
                    <a
                      href="/blog-details"
                      className="d-flex align-items-center main-color mt-40"
                    >
                      <span className="text mr-15">Read More</span>
                      <span className="ti-arrow-top-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 flex-1 hidden md:block">
              <div className="sidebar">
                <div className="widget">
                  <h6 className="title-widget">Search Here</h6>
                  <div className="search-box">
                    <input
                      type="text"
                      name="search-post"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="icon pe-7s-search"></span>
                  </div>
                </div>
                <div className="widget catogry">
                  <h6 className="title-widget">Categories</h6>
                  <ul className="rest">
                    <li>
                      <span>
                        <a href="/blog-grid-sidebar">Business</a>
                      </span>
                      <span className="ml-auto">33</span>
                    </li>
                    <li>
                      <span>
                        <a href="/blog-grid-sidebar">Lifestyle</a>
                      </span>
                      <span className="ml-auto">05</span>
                    </li>
                    <li>
                      <span>
                        <a href="/blog-grid-sidebar">Creative</a>
                      </span>
                      <span className="ml-auto">28</span>
                    </li>
                    <li>
                      <span>
                        <a href="/blog-grid-sidebar">WordPress</a>
                      </span>
                      <span className="ml-auto">17</span>
                    </li>
                    <li>
                      <span>
                        <a href="/blog-grid-sidebar">Design</a>
                      </span>
                      <span className="ml-auto">45</span>
                    </li>
                  </ul>
                </div>
                <div className="widget last-post-thum">
                  <h6 className="title-widget">latest Posts</h6>
                  <div className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href="/blog-grid-sidebar">
                          <img src="/assets/imgs/blog/c1.jpg" alt="" />
                          <span className="date">
                            <span>
                              14 / <br /> sep
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href="/blog-grid-sidebar">Web Design</a>
                      </span>
                      <h6>
                        <a href="/blog-grid-sidebar">
                          ways to quickly increase traffic to your website
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href="/blog-grid-sidebar">
                          <img src="/assets/imgs/blog/c2.jpg" alt="" />
                          <span className="date">
                            <span>
                              14 / <br /> sep
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href="/blog-grid-sidebar">Web Design</a>
                      </span>
                      <h6>
                        <a href="/blog-grid-sidebar">
                          breaking the rules: using sqlite to demo web
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href="/blog-grid-sidebar">
                          <img src="/assets/imgs/blog/c3.jpg" alt="" />
                          <span className="date">
                            <span>
                              14 / <br /> sep
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href="/blog-grid-sidebar">Web Design</a>
                      </span>
                      <h6>
                        <a href="/blog-grid-sidebar">
                          building better ui designs with layout grids
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="widget tags">
                  <h6 className="title-widget">Tags</h6>
                  <div>
                    <a href="/blog-grid-sidebar">Creative</a>
                    <a href="/blog-grid-sidebar">Design</a>
                    <a href="/blog-grid-sidebar">Dark & Light</a>
                    <a href="/blog-grid-sidebar">Minimal</a>
                    <a href="/blog-grid-sidebar">Infolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
