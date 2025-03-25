import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"

const Movies = ({ title }) => {
  return (
    <div>
      <Helmet><title>{title}</title></Helmet>

      <section className="banner-section">
        <div
          className="banner-bg bg_img bg-fixed"
          data-background="./assets/images/banner/banner02.jpg"
          style={{ backgroundImage: 'url("./assets/images/banner/banner02.jpg")' }}
        />
        <div className="container">
          <div className="banner-content">
            <h1 className="title bold">
              get <span className="color-theme">movie</span> tickets
            </h1>
            <p>
              Buy movie tickets in advance, find movie times watch trailers, read
              movie reviews and much more
            </p>
          </div>
        </div>
      </section>



      <section className="search-ticket-section padding-top pt-lg-0">
        <div className="container">
          <div
            className="search-tab bg_img"
            data-background="./assets/images/ticket/ticket-bg01.jpg"
            style={{
              backgroundImage: 'url("./assets/images/ticket/ticket-bg01.jpg")'
            }}
          >
            <div className="row align-items-center mb--20">
              <div className="col-lg-6 mb-20">
                <div className="search-ticket-header">
                  <h6 className="category">welcome to Boleto </h6>
                  <h3 className="title">what are you looking for</h3>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <ul className="tab-menu ticket-tab-menu">
                  <li className="active">
                    <div className="tab-thumb">
                      <img
                        src="./assets/images/ticket/ticket-tab01.png"
                        alt="ticket"
                      />
                    </div>
                    <span>movie</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src="./assets/images/ticket/ticket-tab02.png"
                        alt="ticket"
                      />
                    </div>
                    <span>events</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src="./assets/images/ticket/ticket-tab03.png"
                        alt="ticket"
                      />
                    </div>
                    <span>sports</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-area">
              <div className="tab-item active">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Movies" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">London</span>
                      <ul className="list">
                        <li data-value="london" className="option selected">
                          London
                        </li>
                        <li data-value="dhaka" className="option">
                          dhaka
                        </li>
                        <li data-value="rosario" className="option">
                          rosario
                        </li>
                        <li data-value="madrid" className="option">
                          madrid
                        </li>
                        <li data-value="koltaka" className="option">
                          kolkata
                        </li>
                        <li data-value="rome" className="option">
                          rome
                        </li>
                        <li data-value="khoksa" className="option">
                          khoksa
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">23/10/2020</span>
                      <ul className="list">
                        <li data-value="26-12-19" className="option selected">
                          23/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          24/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          25/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          26/10/2020
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/cinema.png" alt="ticket" />
                    </div>
                    <span className="type">cinema</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="Awaken">Awaken</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">Awaken</span>
                      <ul className="list">
                        <li data-value="Awaken" className="option selected">
                          Awaken
                        </li>
                        <li data-value="dhaka" className="option">
                          dhaka
                        </li>
                        <li data-value="rosario" className="option">
                          rosario
                        </li>
                        <li data-value="madrid" className="option">
                          madrid
                        </li>
                        <li data-value="koltaka" className="option">
                          kolkata
                        </li>
                        <li data-value="rome" className="option">
                          rome
                        </li>
                        <li data-value="khoksa" className="option">
                          khoksa
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Events" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">London</span>
                      <ul className="list">
                        <li data-value="london" className="option selected">
                          London
                        </li>
                        <li data-value="dhaka" className="option">
                          dhaka
                        </li>
                        <li data-value="rosario" className="option">
                          rosario
                        </li>
                        <li data-value="madrid" className="option">
                          madrid
                        </li>
                        <li data-value="koltaka" className="option">
                          kolkata
                        </li>
                        <li data-value="rome" className="option">
                          rome
                        </li>
                        <li data-value="khoksa" className="option">
                          khoksa
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">23/10/2020</span>
                      <ul className="list">
                        <li data-value="26-12-19" className="option selected">
                          23/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          24/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          25/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          26/10/2020
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/cinema.png" alt="ticket" />
                    </div>
                    <span className="type">event</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="angular">angular</option>
                      <option value="startup">startup</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="Last-First">Last-First</option>
                      <option value="wish">wish</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">angular</span>
                      <ul className="list">
                        <li data-value="angular" className="option selected">
                          angular
                        </li>
                        <li data-value="startup" className="option">
                          startup
                        </li>
                        <li data-value="rosario" className="option">
                          rosario
                        </li>
                        <li data-value="madrid" className="option">
                          madrid
                        </li>
                        <li data-value="koltaka" className="option">
                          kolkata
                        </li>
                        <li data-value="Last-First" className="option">
                          Last-First
                        </li>
                        <li data-value="wish" className="option">
                          wish
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Sports" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">London</span>
                      <ul className="list">
                        <li data-value="london" className="option selected">
                          London
                        </li>
                        <li data-value="dhaka" className="option">
                          dhaka
                        </li>
                        <li data-value="rosario" className="option">
                          rosario
                        </li>
                        <li data-value="madrid" className="option">
                          madrid
                        </li>
                        <li data-value="koltaka" className="option">
                          kolkata
                        </li>
                        <li data-value="rome" className="option">
                          rome
                        </li>
                        <li data-value="khoksa" className="option">
                          khoksa
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">23/10/2020</span>
                      <ul className="list">
                        <li data-value="26-12-19" className="option selected">
                          23/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          24/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          25/10/2020
                        </li>
                        <li data-value="26-12-19" className="option">
                          26/10/2020
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/cinema.png" alt="ticket" />
                    </div>
                    <span className="type">sports</span>
                    <select className="select-bar" style={{ display: "none" }}>
                      <option value="football">football</option>
                      <option value="cricket">cricket</option>
                      <option value="cabadi">cabadi</option>
                      <option value="madrid">madrid</option>
                      <option value="gadon">gadon</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                    <div className="nice-select select-bar" tabIndex={0}>
                      <span className="current">football</span>
                      <ul className="list">
                        <li data-value="football" className="option selected">
                          football
                        </li>
                        <li data-value="cricket" className="option">
                          cricket
                        </li>
                        <li data-value="cabadi" className="option">
                          cabadi
                        </li>
                        <li data-value="madrid" className="option">
                          madrid
                        </li>
                        <li data-value="gadon" className="option">
                          gadon
                        </li>
                        <li data-value="rome" className="option">
                          rome
                        </li>
                        <li data-value="khoksa" className="option">
                          khoksa
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-3">
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
              <div className="widget-1 widget-check">
                <div className="widget-header">
                  <h5 className="m-title">Filter By</h5>{" "}
                  <Link to="#0" className="clear-check">
                    Clear All
                  </Link>
                </div>
                <div className="widget-1-body">
                  <h6 className="subtitle">Language</h6>
                  <div className="check-area">
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang1" />
                      <label htmlFor="lang1">Tamil</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang2" />
                      <label htmlFor="lang2">Telegu</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang3" />
                      <label htmlFor="lang3">Hindi</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang4" />
                      <label htmlFor="lang4">English</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang5" />
                      <label htmlFor="lang5">Multiple Language</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang6" />
                      <label htmlFor="lang6">Gujrati</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="lang7" />
                      <label htmlFor="lang7">Bangla</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-1 widget-check">
                <div className="widget-1-body">
                  <h6 className="subtitle">experience</h6>
                  <div className="check-area">
                    <div className="form-group">
                      <input type="checkbox" name="mode" id="mode1" />
                      <label htmlFor="mode1">2d</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="mode" id="mode2" />
                      <label htmlFor="mode2">3d</label>
                    </div>
                  </div>
                  <div className="add-check-area">
                    <Link to="#0">
                      view more <i className="plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="widget-1 widget-check">
                <div className="widget-1-body">
                  <h6 className="subtitle">genre</h6>
                  <div className="check-area">
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre1" />
                      <label htmlFor="genre1">thriller</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre2" />
                      <label htmlFor="genre2">horror</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre3" />
                      <label htmlFor="genre3">drama</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre4" />
                      <label htmlFor="genre4">romance</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre5" />
                      <label htmlFor="genre5">action</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre6" />
                      <label htmlFor="genre6">comedy</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre7" />
                      <label htmlFor="genre7">romantic</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre8" />
                      <label htmlFor="genre8">animation</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre9" />
                      <label htmlFor="genre9">sci-fi</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="genre" id="genre10" />
                      <label htmlFor="genre10">adventure</label>
                    </div>
                  </div>
                  <div className="add-check-area">
                    <Link to="#0">
                      view more <i className="plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <Link to="#0">
                    <img
                      src="./assets/images/sidebar/banner/banner02.jpg"
                      alt="banner"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab tab">
                <div className="filter-area">
                  <div className="filter-main">
                    <div className="left">
                      <div className="item">
                        <span className="show">Show :</span>
                        <select className="select-bar" style={{ display: "none" }}>
                          <option value={12}>12</option>
                          <option value={15}>15</option>
                          <option value={18}>18</option>
                          <option value={21}>21</option>
                          <option value={24}>24</option>
                          <option value={27}>27</option>
                          <option value={30}>30</option>
                        </select>
                        <div className="nice-select select-bar" tabIndex={0}>
                          <span className="current">12</span>
                          <ul className="list">
                            <li data-value={12} className="option selected">
                              12
                            </li>
                            <li data-value={15} className="option">
                              15
                            </li>
                            <li data-value={18} className="option">
                              18
                            </li>
                            <li data-value={21} className="option">
                              21
                            </li>
                            <li data-value={24} className="option">
                              24
                            </li>
                            <li data-value={27} className="option">
                              27
                            </li>
                            <li data-value={30} className="option">
                              30
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="item">
                        <span className="show">Sort By :</span>
                        <select className="select-bar" style={{ display: "none" }}>
                          <option value="showing">now showing</option>
                          <option value="exclusive">exclusive</option>
                          <option value="trending">trending</option>
                          <option value="most-view">most view</option>
                        </select>
                        <div className="nice-select select-bar" tabIndex={0}>
                          <span className="current">now showing</span>
                          <ul className="list">
                            <li data-value="showing" className="option selected">
                              now showing
                            </li>
                            <li data-value="exclusive" className="option">
                              exclusive
                            </li>
                            <li data-value="trending" className="option">
                              trending
                            </li>
                            <li data-value="most-view" className="option">
                              most view
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="grid-button tab-menu">
                      <li className="active">
                        <i className="fas fa-th" />
                      </li>
                      <li>
                        <i className="fas fa-bars" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="row mb-10 justify-content-center">
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie01.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">alone</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie02.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">mars</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie03.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">venus</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie04.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">on watch</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie05.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">fury</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie06.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">trooper</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie07.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">horror night</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie08.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">the lost name</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie09.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">calm stedfast</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie10.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">criminal on party</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie11.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">halloween party</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <Link to="/movie-details">
                              <img
                                src="./assets/images/movie/movie12.jpg"
                                alt="movie"
                              />
                            </Link>
                          </div>
                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <Link to="/movie-details">the most wanted</Link>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/tomato.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                              <li>
                                <div className="thumb">
                                  <img
                                    src="./assets/images/movie/cake.png"
                                    alt="movie"
                                  />
                                </div>
                                <span className="content">88%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div className="movie-area mb-10">
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie01.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie01.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie01.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">alone</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie02.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie02.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie02.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">mars</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie03.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie03.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie03.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">venus</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie04.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie04.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie04.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">on watch</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie05.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie05.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie05.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">fury</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie06.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie06.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie06.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">trooper</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie07.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie07.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie07.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">horror night</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie08.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie08.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie08.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">the lost name</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie09.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie09.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie09.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">calm stedfast</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie10.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie10.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie10.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">criminal on party</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie11.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie11.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie11.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">halloween party</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <Link
                            to="/movie-details"
                            className="w-100 bg_img h-100"
                            data-background="./assets/images/movie/movie12.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/images/movie/movie12.jpg")'
                            }}
                          >
                            <img
                              className="d-sm-none"
                              src="./assets/images/movie/movie12.jpg"
                              alt="movie"
                            />
                          </Link>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <Link to="/movie-details">the most wanted</Link>
                          </h5>
                          <p className="duration">2hrs 50 min</p>
                          <div className="movie-tags">
                            <Link to="#0">action</Link>
                            <Link to="#0">adventure</Link>
                            <Link to="#0">fantasy</Link>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <Link to="#0"> November 8 , 2020</Link>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/tomato.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src="./assets/images/movie/cake.png"
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/heart.png"
                                      alt="icons"
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className="react-item mr-auto">
                                <Link to="#0">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/book.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>book ticket</span>
                                </Link>
                              </div>
                              <div className="react-item">
                                <Link to="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src="./assets/images/icons/play-button.png"
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-area text-center">
                  <Link to="#0">
                    <i className="fas fa-angle-double-left" />
                    <span>Prev</span>
                  </Link>
                  <Link to="#0">1</Link>
                  <Link to="#0">2</Link>
                  <Link to="#0" className="active">
                    3
                  </Link>
                  <Link to="#0">4</Link>
                  <Link to="#0">5</Link>
                  <Link to="#0">
                    <span>Next</span>
                    <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default Movies
