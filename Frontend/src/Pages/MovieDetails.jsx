import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom';

const MovieDetails = ({ title }) => {
  const location = useLocation();
  const movie = location.state?.movie; // Ensure movie exists

  if (!movie) {
    return <h1>No Movie Data Available</h1>;
  }
  return (
    <div>

      <Helmet><title>{title}</title></Helmet>

      <section
        className="details-banner bg_img"
        data-background={movie.background_image}
        style={{ backgroundImage: `url("${movie.background_image}")` }}
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-thumb">
              <img src={movie.background_image} alt="movie" />
              <Link to="https://www.youtube.com/embed/KGeBMAgc46E"
                className="video-popup"
              >
                <img src="./assets/images/movie/video-button.png" alt="movie" />
              </Link>
            </div>
            <div className="details-banner-content offset-lg-3">
              <h3 className="title">{movie.title}</h3>
              <div className="tags">
                <Link to="#0">{movie.languages}</Link>

              </div>
              <Link to="#0" className="button">
                {movie.type}
              </Link>
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
            <Link
              to={{
                pathname: "/ticket-plan",
              }}
              state={{ movieId: movie.id }}
              className="custom-button"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </section>



      <section className="movie-details-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center flex-wrap-reverse mb--50">
            <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
              <div className="widget-1 widget-tags">
                <h6 className='m-2'>Formats</h6>
                <ul>
                  <li>
                    <Link to="#0">{movie.formats}</Link>
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
                        <Link to="#0">Amazon Pay Cashback Offer</Link>
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
                        <Link to="#0">PayPal Offer</Link>
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
                        <Link to="#0">HDFC Bank Offer</Link>
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
                  <Link to="#0">
                    <img
                      src="./assets/images/sidebar/banner/banner01.jpg"
                      alt="banner"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-50">
              <div className="movie-details">
                <h3 className="title">Photos</h3>
                <div className="details-photos owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      {movie.images.map((image, index) => (
                        <div key={index} className="owl-item ml-2" style={{ width: "250px", height: "250px" }}>
                          <div className="thumb">
                            <Link to={image.image} className="img-pop">
                              <img src={image.image} alt={`movie-${index}`} />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="tab summery-review">
                  <ul className="tab-menu">
                    <li className="active">summery</li>

                  </ul>
                  <div className="tab-area">
                    <div className="tab-item active">
                      {/* Synopsis */}
                      <div className="item">
                        <h5 className="sub-title">Synopsis</h5>
                        <p>{movie.synopsis}</p>
                      </div>

                      {/* Cast Section */}
                      <div className="item">
                        <div className="header">
                          <h5 className="sub-title">Cast</h5>
                          <div className="navigation">
                            <div className="cast-prev">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                            <div className="cast-next">
                              <i className="flaticon-double-right-arrows-angles" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          {movie.cast.map((member) => (
                            <div key={member.id} className="col-md-3 col-sm-6 mb-3">
                              <div className="cast-item">
                                <div className="cast-thumb">
                                  <Link to="#0">
                                    <img
                                      src={member.profile_image}
                                      alt={member.name}
                                      className="img-fluid"
                                    />
                                  </Link>
                                </div>
                                <div className="cast-content">
                                  <h6 className="cast-title">
                                    <Link to="#0">{member.name}</Link>
                                  </h6>
                                  <span className="cate">{member.role}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Crew Section */}
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
                        <div className="row">
                          {movie.crew.map((member) => (
                            <div key={member.id} className="col-md-3 col-sm-6 mb-3">
                              <div className="cast-item">
                                <div className="cast-thumb">
                                  <Link to="#0">
                                    <img
                                      src={member.profile_image}
                                      alt={member.name}
                                      className="img-fluid"
                                    />
                                  </Link>
                                </div>
                                <div className="cast-content">
                                  <h6 className="cast-title">
                                    <Link to="#0">{member.name}</Link>
                                  </h6>
                                  <span className="cate">{member.position}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
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
