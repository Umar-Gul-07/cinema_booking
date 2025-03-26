import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom';

const MovieDetails = ({ title }) => {
  const location = useLocation();
  const movie = location.state?.movie; // Ensure movie exists

  if (!movie) {
    return <h1>No Movie Data Available</h1>;
  }
  console.log(movie)
  return (
    <div>

      <Helmet><title>{title}</title></Helmet>

      <section
        className="details-banner bg_img"
        data-background="./assets/images/banner/banner03.jpg"
        style={{ backgroundImage: 'url("./assets/images/banner/banner03.jpg")' }}
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-thumb">
              <img src="./assets/images/movie/venus.jpg" alt="movie" />
              <a
                href="https://www.youtube.com/embed/KGeBMAgc46E"
                className="video-popup"
              >
                <img src="./assets/images/movie/video-button.png" alt="movie" />
              </a>
            </div>
            <div className="details-banner-content offset-lg-3">
              <h3 className="title">{movie.title}</h3>
              <div className="tags">
                <a href="#0">{movie.languages}</a>
          
              </div>
              <a href="#0" className="button">
                {movie.type}
              </a>
              <div className="social-and-duration">
                <div className="duration-area">
                  <div className="item">
                    <i className="fas fa-calendar-alt" />
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="item">
                    <i className="far fa-clock" />
                    <span>{movie.duration}</span>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="book-section bg-one">
        <div className="container">
          <div className="book-wrapper offset-lg-3">
            <div className="left-side">
              
            
            </div>
            <a href="/ticket-plan" className="custom-button">
              book tickets
            </a>
          </div>
        </div>
      </section>



      <section className="movie-details-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center flex-wrap-reverse mb--50">
            <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
              <div className="widget-1 widget-tags">
                <ul>
                  <li>
                    <a href="#0">2D</a>
                  </li>
                
                </ul>
              </div>
              <div className="widget-1 widget-offer">
                <h3 className="title">Applicable offer</h3>
                <div className="offer-body">
                  <div className="offer-item">
                    <div className="thumb">
                      <img src="./assets/images/sidebar/offer01.png" alt="sidebar" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="#0">Amazon Pay Cashback Offer</a>
                      </h6>
                      <p>Win Cashback Upto Rs 300*</p>
                    </div>
                  </div>
                  <div className="offer-item">
                    <div className="thumb">
                      <img src="./assets/images/sidebar/offer02.png" alt="sidebar" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="#0">PayPal Offer</a>
                      </h6>
                      <p>
                        Transact first time with Paypal and get 100% cashback up to
                        Rs. 500
                      </p>
                    </div>
                  </div>
                  <div className="offer-item">
                    <div className="thumb">
                      <img src="./assets/images/sidebar/offer03.png" alt="sidebar" />
                    </div>
                    <div className="content">
                      <h6>
                        <a href="#0">HDFC Bank Offer</a>
                      </h6>
                      <p>
                        Get 15% discount up to INR 100* and INR 50* off on F&amp;B
                        T&amp;C apply
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img
                      src="./assets/images/sidebar/banner/banner01.jpg"
                      alt="banner"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-50">
              <div className="movie-details">
                <h3 className="title">photos</h3>
                <div className="details-photos owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-877px, 0px, 0px)",
                        transition: "1s",
                        width: 1755
                      }}
                    >
                      <div
                        className="owl-item"
                        style={{ width: "262.5px", marginRight: 30 }}
                      >
                        <div className="thumb">
                          <a
                            href="./assets/images/movie/movie-details01.jpg"
                            className="img-pop"
                          >
                            <img
                              src="./assets/images/movie/movie-details01.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "262.5px", marginRight: 30 }}
                      >
                        <div className="thumb">
                          <a
                            href="./assets/images/movie/movie-details02.jpg"
                            className="img-pop"
                          >
                            <img
                              src="./assets/images/movie/movie-details02.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "262.5px", marginRight: 30 }}
                      >
                        <div className="thumb">
                          <a
                            href="./assets/images/movie/movie-details03.jpg"
                            className="img-pop"
                          >
                            <img
                              src="./assets/images/movie/movie-details03.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "262.5px", marginRight: 30 }}
                      >
                        <div className="thumb">
                          <a
                            href="./assets/images/movie/movie-details01.jpg"
                            className="img-pop"
                          >
                            <img
                              src="./assets/images/movie/movie-details01.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "262.5px", marginRight: 30 }}
                      >
                        <div className="thumb">
                          <a
                            href="./assets/images/movie/movie-details02.jpg"
                            className="img-pop"
                          >
                            <img
                              src="./assets/images/movie/movie-details02.jpg"
                              alt="movie"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "262.5px", marginRight: 30 }}
                      >
                        <div className="thumb">
                          <a
                            href="./assets/images/movie/movie-details03.jpg"
                            className="img-pop"
                          >
                            <img
                              src="./assets/images/movie/movie-details03.jpg"
                              alt="movie"
                            />
                          </a>
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
                <div className="tab summery-review">
                  <ul className="tab-menu">
                    <li className="active">summery</li>
                    
                  </ul>
                  <div className="tab-area">
                    <div className="tab-item active">
                      <div className="item">
                        <h5 className="sub-title">Synopsis</h5>
                        <p>
                         {movie.synopsis}{" "}
                        </p>
                      </div>
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">cast</h5>
                          <div className="navigation">
                            <div className="cast-prev">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                            <div className="cast-next">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                          </div>
                          
                        </div>
                     <div> <div className="cast-item">
                                  <div className="cast-thumb">
                                    <a href="#0">
                                      <img
                                        src="./assets/images/cast/cast04.jpg"
                                        alt="cast"
                                      />
                                    </a>
                                  </div>
                                  <div className="cast-content">
                                    <h6 className="cast-title">
                                      <a href="#0">josh potter</a>
                                    </h6>
                                    <span className="cate">actor</span>
                                    <p>As quicksilver</p>
                                  </div>
                                </div></div>
                      </div>
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">Crew</h5>
                          <div className="navigation">
                            <div className="cast-prev">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                            <div className="cast-next">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                          </div>
                          
                        </div>
                     <div> <div className="cast-item">
                                  <div className="cast-thumb">
                                    <a href="#0">
                                      <img
                                        src="./assets/images/cast/cast04.jpg"
                                        alt="cast"
                                      />
                                    </a>
                                  </div>
                                  <div className="cast-content">
                                    <h6 className="cast-title">
                                      <a href="#0">josh potter</a>
                                    </h6>
                                    <span className="cate">actor</span>
                                    <p>As quicksilver</p>
                                  </div>
                                </div></div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MovieDetails
