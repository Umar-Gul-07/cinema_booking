import React from 'react'
import { Helmet } from 'react-helmet'
import TitleBar from './include/TitleBar'

const Blogs = ({title}) => {
  return (
    <div>
      <Helmet><title>{title}</title></Helmet>
      <TitleBar title={title}/>

      <section className="blog-section padding-top padding-bottom">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 mb-50 mb-lg-0">
        <article>
          <div className="post-item">
            <div className="post-thumb">
              <a href="blog-details.html">
                <img src="./assets/images/blog/blog01.jpg" alt="blog" />
              </a>
            </div>
            <div className="post-content">
              <div className="post-header">
                <h4 className="title">
                  <a href="blog-details.html">
                    Increase Event Ticket Sales For Film Production With the
                    Right Advertising Strategies
                  </a>
                </h4>
                <div className="meta-post">
                  <a href="#0" className="mr-4">
                    <i className="flaticon-conversation" />
                    20 Comments
                  </a>
                  <a href="#0">
                    <i className="flaticon-view" />
                    466 View
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac cursus leo. Nullam dolor nunc, hendrerit non
                  velit id, pharetra viverra elit.
                </p>
              </div>
              <div className="entry-content">
                <div className="left">
                  <span className="date">Dece 15, 2020 BY </span>
                  <div className="authors">
                    <div className="thumb">
                      <a href="#0">
                        <img src="./assets/images/blog/author.jpg" alt="#0" />
                      </a>
                    </div>
                    <h6 className="title">
                      <a href="#0">Alvin Mcdaniel</a>
                    </h6>
                  </div>
                </div>
                <a href="#0" className="buttons">
                  Read More <i className="flaticon-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="post-item">
            <div className="post-thumb">
              <div className="owl-carousel owl-theme blog-slider owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-3750px, 0px, 0px)",
                      transition: "0.25s",
                      width: 6000
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog04.jpg" alt="blog" />
                    </div>
                    <div className="owl-item cloned" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog01.jpg" alt="blog" />
                    </div>
                    <div className="owl-item" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog02.jpg" alt="blog" />
                    </div>
                    <div className="owl-item" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog03.jpg" alt="blog" />
                    </div>
                    <div className="owl-item" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog04.jpg" alt="blog" />
                    </div>
                    <div className="owl-item active" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog01.jpg" alt="blog" />
                    </div>
                    <div className="owl-item cloned" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog02.jpg" alt="blog" />
                    </div>
                    <div className="owl-item cloned" style={{ width: 750 }}>
                      <img src="./assets/images/blog/blog03.jpg" alt="blog" />
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
              <div className="blog-prev">
                <i className="flaticon-double-right-arrows-angles" />
              </div>
              <div className="blog-next active">
                <i className="flaticon-double-right-arrows-angles" />
              </div>
            </div>
            <div className="post-content">
              <div className="post-header">
                <h4 className="title">
                  <a href="blog-details.html">
                    Factors To Take Into Consideration When You Want To Buy
                    Tickets Online
                  </a>
                </h4>
                <div className="meta-post">
                  <a href="#0" className="mr-4">
                    <i className="flaticon-conversation" />
                    20 Comments
                  </a>
                  <a href="#0">
                    <i className="flaticon-view" />
                    466 View
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac cursus leo. Nullam dolor nunc, hendrerit non
                  velit id, pharetra viverra elit.
                </p>
              </div>
              <div className="entry-content">
                <div className="left">
                  <span className="date">Dece 15, 2020 BY </span>
                  <div className="authors">
                    <div className="thumb">
                      <a href="#0">
                        <img src="./assets/images/blog/author.jpg" alt="#0" />
                      </a>
                    </div>
                    <h6 className="title">
                      <a href="#0">Alvin Mcdaniel</a>
                    </h6>
                  </div>
                </div>
                <a href="#0" className="buttons">
                  Read More <i className="flaticon-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="post-item">
            <div className="post-thumb">
              <img src="./assets/images/blog/blog03.jpg" alt="blog" />
              <a
                href="https://www.youtube.com/embed/GT6-H4BRyqQ"
                className="video-button video-popup"
              >
                <i className="flaticon-play-button" />
              </a>
            </div>
            <div className="post-content">
              <div className="post-header">
                <h4 className="title">
                  <a href="blog-details.html">
                    Movie Ticket Prices: One Size Fits All? It's Time to
                    Experiment
                  </a>
                </h4>
                <div className="meta-post">
                  <a href="#0" className="mr-4">
                    <i className="flaticon-conversation" />
                    20 Comments
                  </a>
                  <a href="#0">
                    <i className="flaticon-view" />
                    466 View
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac cursus leo. Nullam dolor nunc, hendrerit non
                  velit id, pharetra viverra elit.
                </p>
              </div>
              <div className="entry-content">
                <div className="left">
                  <span className="date">Dece 15, 2020 BY </span>
                  <div className="authors">
                    <div className="thumb">
                      <a href="#0">
                        <img src="./assets/images/blog/author.jpg" alt="#0" />
                      </a>
                    </div>
                    <h6 className="title">
                      <a href="#0">Alvin Mcdaniel</a>
                    </h6>
                  </div>
                </div>
                <a href="#0" className="buttons">
                  Read More <i className="flaticon-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="post-item">
            <div className="post-thumb">
              <a href="blog-details.html">
                <img src="./assets/images/blog/blog04.jpg" alt="blog" />
              </a>
            </div>
            <div className="post-content">
              <div className="post-header">
                <h4 className="title">
                  <a href="blog-details.html">
                    Movie Ticket Prices: One Size Fits All? It's Time to
                    Experiment
                  </a>
                </h4>
                <div className="meta-post">
                  <a href="#0" className="mr-4">
                    <i className="flaticon-conversation" />
                    20 Comments
                  </a>
                  <a href="#0">
                    <i className="flaticon-view" />
                    466 View
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ac cursus leo. Nullam dolor nunc, hendrerit non
                  velit id, pharetra viverra elit.
                </p>
              </div>
              <div className="entry-content">
                <div className="left">
                  <span className="date">Dece 15, 2020 BY </span>
                  <div className="authors">
                    <div className="thumb">
                      <a href="#0">
                        <img src="./assets/images/blog/author.jpg" alt="#0" />
                      </a>
                    </div>
                    <h6 className="title">
                      <a href="#0">Alvin Mcdaniel</a>
                    </h6>
                  </div>
                </div>
                <a href="#0" className="buttons">
                  Read More <i className="flaticon-right" />
                </a>
              </div>
            </div>
          </div>
        </article>
        <div className="pagination-area text-center">
          <a href="#0">
            <i className="fas fa-angle-double-left" />
            <span>Prev</span>
          </a>
          <a href="#0">1</a>
          <a href="#0">2</a>
          <a href="#0" className="active">
            3
          </a>
          <a href="#0">4</a>
          <a href="#0">5</a>
          <a href="#0">
            <span>Next</span>
            <i className="fas fa-angle-double-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-sm-10 col-md-8">
        <aside>
          <div className="widget widget-search">
            <h5 className="title">search</h5>
            <form className="search-form">
              <input
                type="text"
                placeholder="Enter your Search Content"
                required=""
              />
              <button type="submit">
                <i className="flaticon-loupe" />
                Search
              </button>
            </form>
          </div>
          <div className="widget widget-post">
            <h5 className="title">latest post</h5>
            <div className="slider-nav">
              <span className="flaticon-angle-pointing-to-left widget-prev" />
              <span className="flaticon-right-arrow-angle widget-next active" />
            </div>
            <div className="widget-slider owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-990px, 0px, 0px)",
                    transition: "0.25s",
                    width: 1980
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 300, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <a href="#0">
                          <img
                            src="./assets/images/blog/slider01.jpg"
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="p-title">
                          <a href="#0">
                            Three Ways to Book Sporting Event Tickets
                          </a>
                        </h6>
                        <div className="meta-post">
                          <a href="#0" className="mr-4">
                            <i className="flaticon-loupe" />
                            20 Comments
                          </a>
                          <a href="#0">
                            <i className="flaticon-loupe" />
                            466 View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 300, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <a href="#0">
                          <img
                            src="./assets/images/blog/slider01.jpg"
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="p-title">
                          <a href="#0">
                            Three Ways to Book Sporting Event Tickets
                          </a>
                        </h6>
                        <div className="meta-post">
                          <a href="#0" className="mr-4">
                            <i className="flaticon-loupe" />
                            20 Comments
                          </a>
                          <a href="#0">
                            <i className="flaticon-loupe" />
                            466 View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 300, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <a href="#0">
                          <img
                            src="./assets/images/blog/slider01.jpg"
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="p-title">
                          <a href="#0">
                            Three Ways to Book Sporting Event Tickets
                          </a>
                        </h6>
                        <div className="meta-post">
                          <a href="#0" className="mr-4">
                            <i className="flaticon-loupe" />
                            20 Comments
                          </a>
                          <a href="#0">
                            <i className="flaticon-loupe" />
                            466 View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 300, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <a href="#0">
                          <img
                            src="./assets/images/blog/slider01.jpg"
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="p-title">
                          <a href="#0">
                            Three Ways to Book Sporting Event Tickets
                          </a>
                        </h6>
                        <div className="meta-post">
                          <a href="#0" className="mr-4">
                            <i className="flaticon-loupe" />
                            20 Comments
                          </a>
                          <a href="#0">
                            <i className="flaticon-loupe" />
                            466 View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 300, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <a href="#0">
                          <img
                            src="./assets/images/blog/slider01.jpg"
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="p-title">
                          <a href="#0">
                            Three Ways to Book Sporting Event Tickets
                          </a>
                        </h6>
                        <div className="meta-post">
                          <a href="#0" className="mr-4">
                            <i className="flaticon-loupe" />
                            20 Comments
                          </a>
                          <a href="#0">
                            <i className="flaticon-loupe" />
                            466 View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 300, marginRight: 30 }}
                  >
                    <div className="item">
                      <div className="thumb">
                        <a href="#0">
                          <img
                            src="./assets/images/blog/slider01.jpg"
                            alt="blog"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="p-title">
                          <a href="#0">
                            Three Ways to Book Sporting Event Tickets
                          </a>
                        </h6>
                        <div className="meta-post">
                          <a href="#0" className="mr-4">
                            <i className="flaticon-loupe" />
                            20 Comments
                          </a>
                          <a href="#0">
                            <i className="flaticon-loupe" />
                            466 View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
          <div className="widget widget-follow">
            <h5 className="title">Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="#0" className="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#0" className="active">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#0" className="">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-google" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="widget widget-categories">
            <h5 className="title">categories</h5>
            <ul>
              <li>
                <a href="#0">
                  <span>Showtimes &amp; Tickets</span>
                  <span>50</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <span>Latest Trailers</span>
                  <span>43</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <span>Coming Soon </span>
                  <span>34</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <span>In Theaters</span>
                  <span>63</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <span>Release Calendar</span>
                  <span>11</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <span>Stars</span>
                  <span>30</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <span>Horror Movie </span>
                  <span>55</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="widget widget-tags">
            <h5 className="title">featured tags</h5>
            <ul>
              <li>
                <a href="#0">creative</a>
              </li>
              <li>
                <a href="#0">design</a>
              </li>
              <li>
                <a href="#0">skill</a>
              </li>
              <li>
                <a href="#0">template</a>
              </li>
              <li>
                <a href="#0" className="active">
                  landing
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>





    </div>
  )
}

export default Blogs
