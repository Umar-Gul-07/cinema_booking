import React from 'react'
import { Helmet } from 'react-helmet'

const Home = ({title}) => {
    return (
        <div>
            <Helmet><title>{title}</title></Helmet>
            <section className="banner-section">
                <div
                    className="banner-bg bg_img bg-fixed"
                    data-background="./assets/images/banner/banner01.jpg"
                    style={{ backgroundImage: 'url("./assets/images/banner/banner01.jpg")' }}
                />
                <div className="container">
                    <div className="banner-content">
                        <h1 className="title  cd-headline clip">
                            <span className="d-block">book your</span> tickets for
                            <span
                                className="color-theme cd-words-wrapper p-0 m-0"
                                style={{ width: "271.875px" }}
                            >
                                <b className="is-hidden">Movie</b>
                                <b className="is-hidden">Event</b>
                                <b className="is-visible">Sport</b>
                            </span>
                        </h1>
                        <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
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
                                            <option value="26-12-19">23/10/2019</option>
                                            <option value="26-12-19">24/10/2019</option>
                                            <option value="26-12-19">25/10/2019</option>
                                            <option value="26-12-19">26/10/2019</option>
                                        </select>
                                        <div className="nice-select select-bar" tabIndex={0}>
                                            <span className="current">23/10/2019</span>
                                            <ul className="list">
                                                <li data-value="26-12-19" className="option selected">
                                                    23/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    24/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    25/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    26/10/2019
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
                                            <option value="26-12-19">23/10/2019</option>
                                            <option value="26-12-19">24/10/2019</option>
                                            <option value="26-12-19">25/10/2019</option>
                                            <option value="26-12-19">26/10/2019</option>
                                        </select>
                                        <div className="nice-select select-bar" tabIndex={0}>
                                            <span className="current">23/10/2019</span>
                                            <ul className="list">
                                                <li data-value="26-12-19" className="option selected">
                                                    23/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    24/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    25/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    26/10/2019
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
                                            <option value="26-12-19">23/10/2019</option>
                                            <option value="26-12-19">24/10/2019</option>
                                            <option value="26-12-19">25/10/2019</option>
                                            <option value="26-12-19">26/10/2019</option>
                                        </select>
                                        <div className="nice-select select-bar" tabIndex={0}>
                                            <span className="current">23/10/2019</span>
                                            <ul className="list">
                                                <li data-value="26-12-19" className="option selected">
                                                    23/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    24/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    25/10/2019
                                                </li>
                                                <li data-value="26-12-19" className="option">
                                                    26/10/2019
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
                    <div className="tab">
                        <div className="section-header-2">
                            <div className="left">
                                <h2 className="title">movies</h2>
                                <p>Be sure not to miss these Movies today.</p>
                            </div>
                            <ul className="tab-menu">
                                <li className="active">now showing</li>
                                <li>coming soon</li>
                                <li>exclusive</li>
                            </ul>
                        </div>
                        <div className="tab-area mb-30-none">
                            <div className="tab-item active">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(-2047px, 0px, 0px)",
                                                transition: "0.25s",
                                                width: 3510
                                            }}
                                        >
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie01.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">alone</a>
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
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie02.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">mars</a>
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
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie03.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">venus</a>
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
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie04.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">horror night</a>
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
                                            <div
                                                className="owl-item"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie01.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">alone</a>
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
                                            <div
                                                className="owl-item"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie02.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">mars</a>
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
                                            <div
                                                className="owl-item"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie03.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">venus</a>
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
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie04.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">horror night</a>
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
                                            <div
                                                className="owl-item cloned active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie01.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">alone</a>
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
                                            <div
                                                className="owl-item cloned active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie02.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">mars</a>
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
                                            <div
                                                className="owl-item cloned active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie03.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">venus</a>
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
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie04.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">horror night</a>
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
                            <div className="tab-item">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all"
                                            }}
                                        >
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie01.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">alone</a>
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
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie02.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">mars</a>
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
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie03.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">venus</a>
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
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie04.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">horror night</a>
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
                            <div className="tab-item">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all"
                                            }}
                                        >
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie01.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">alone</a>
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
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie02.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">mars</a>
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
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie03.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">venus</a>
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
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="movie-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/movie/movie04.jpg"
                                                                    alt="movie"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">horror night</a>
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
                        </div>
                    </div>
                </div>
            </section>



            <section className="event-section padding-top padding-bottom bg-four">
                <div className="container">
                    <div className="tab">
                        <div className="section-header-2">
                            <div className="left">
                                <h2 className="title">events</h2>
                                <p>Be sure not to miss these Event today.</p>
                            </div>
                            <ul className="tab-menu">
                                <li className="active">now showing</li>
                                <li>coming soon</li>
                                <li>exclusive</li>
                            </ul>
                        </div>
                        <div className="tab-area mb-30-none">
                            <div className="tab-item active">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(-1170px, 0px, 0px)",
                                                transition: "0.25s",
                                                width: 3510
                                            }}
                                        >
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event01.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">Digital Economy Conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event02.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">web design conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event03.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">digital thinkers meetup</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event04.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world digital conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event01.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">Digital Economy Conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event02.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">web design conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event03.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">digital thinkers meetup</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event04.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world digital conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event01.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">Digital Economy Conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event02.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">web design conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event03.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">digital thinkers meetup</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event04.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world digital conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
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
                            <div className="tab-item">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all"
                                            }}
                                        >
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event01.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">Digital Economy Conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event02.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">web design conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event03.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">digital thinkers meetup</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event04.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world digital conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
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
                            <div className="tab-item">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all"
                                            }}
                                        >
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event01.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">Digital Economy Conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event02.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">web design conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event03.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">digital thinkers meetup</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="event-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/event/event04.jpg"
                                                                    alt="event"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world digital conference 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
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
                        </div>
                    </div>
                </div>
            </section>




            <section className="sports-section padding-top padding-bottom">
                <div className="container">
                    <div className="tab">
                        <div className="section-header-2">
                            <div className="left">
                                <h2 className="title">sports</h2>
                                <p>Be sure not to miss these Sports today.</p>
                            </div>
                            <ul className="tab-menu">
                                <li className="active">now showing</li>
                                <li>coming soon</li>
                                <li>exclusive</li>
                            </ul>
                        </div>
                        <div className="tab-area mb-30-none">
                            <div className="tab-item active">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(-1755px, 0px, 0px)",
                                                transition: "0.25s",
                                                width: 3510
                                            }}
                                        >
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports01.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">football league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports02.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world cricket league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports03.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">basket ball league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports04.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world badminton league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports01.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">football league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports02.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world cricket league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports03.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">basket ball league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports04.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world badminton league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports01.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">football league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned active"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports02.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world cricket league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports03.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">basket ball league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="owl-item cloned"
                                                style={{ width: "262.5px", marginRight: 30 }}
                                            >
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports04.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world badminton league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
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
                            <div className="tab-item">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all"
                                            }}
                                        >
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports01.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">football league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports02.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world cricket league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports03.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">basket ball league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports04.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world badminton league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
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
                            <div className="tab-item">
                                <div className="owl-carousel owl-theme tab-slider owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div
                                            className="owl-stage"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transition: "all"
                                            }}
                                        >
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports01.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">football league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports02.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world cricket league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports03.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">basket ball league tournament</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item">
                                                <div className="item">
                                                    <div className="sports-grid">
                                                        <div className="movie-thumb c-thumb">
                                                            <a href="#0">
                                                                <img
                                                                    src="./assets/images/sports/sports04.jpg"
                                                                    alt="sports"
                                                                />
                                                            </a>
                                                            <div className="event-date">
                                                                <h6 className="date-title">28</h6>
                                                                <span>Dec</span>
                                                            </div>
                                                        </div>
                                                        <div className="movie-content bg-one">
                                                            <h5 className="title m-0">
                                                                <a href="#0">world badminton league 2020</a>
                                                            </h5>
                                                            <div className="movie-rating-percent">
                                                                <span>327 Montague Street</span>
                                                            </div>
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
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home
