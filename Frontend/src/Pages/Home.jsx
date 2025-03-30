import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import api from '../Utils/Axios';
import Movie from './include/Movie';

const Home = ({ title }) => {
    const [movies, setMovies] = useState([]);
    const [events, setEvents] = useState([]);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get("/movies/");
                const firstFourMovies = response.data.slice(0, 4); // Get only the first 4 movies
                setMovies(firstFourMovies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        const fetchEvents = async () => {
            try {
                const response = await api.get("/events/");
                const firstFourMovies = response.data.slice(0, 4);
                setEvents(firstFourMovies);
                console.log("Events")
                console.log(events)
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
        fetchEvents();
    }, []);
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
                               
                                </ul>
                            </div>
                        </div>
                        <div className="tab-area">
                            <div className="tab-item active">
                                <form className="ticket-search-form">
                                    <div className="form-group ">
                                        <input type="text" placeholder="Search fo Movies" />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
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
                                <li className="active">Top Trending</li>
                            </ul>
                        </div>
                        <div className="tab-area mb-30-none">
                            {movies.length > 0 ? (
                                movies.map((movie) => (
                                    <Movie key={movie.id} movie={movie} />
                                ))
                            ) : (
                                <p className='text-danger m-5'>No movies found.</p>
                            )}
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
                                <li className="active">Comming Events</li>

                            </ul>
                        </div>
                        <div className="tab-area mb-30-none">
                            <div className='row'>
                                <div className='col-lg-4'>
                                    {events.length > 0 ?
                                        events.map((item) => (
                                            <div className="item">
                                                <div className="event-grid">
                                                    <div className="movie-thumb c-thumb">
                                                        <a href="#0">
                                                            <img
                                                                src={item.image}
                                                                alt="event"
                                                            />
                                                        </a>
                                                        <div className="event-date">
                                                            <h6 className="date-title">{item.date}</h6>
                                                            <span>{item.time}</span>
                                                        </div>
                                                    </div>
                                                    <div className="movie-content bg-one">
                                                        <h5 className="title m-0">
                                                            <a href="#0">{item.name}</a>
                                                        </h5>
                                                        <div className="movie-rating-percent">
                                                            <span>{item.description}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : <strong> <p className='text-danger m-5'>No events found.</p></strong>

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="gallery-section padding-top padding-bottom bg-one">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">Take a look at our</span>
                        <h2 className="title">A ticket for every fan.</h2>
                        <p>
                            World is committed to making participation in the event a harassment
                            free experience for everyone, regardless of level of experience, gender,
                            gender identity and expression
                        </p>
                    </div>
                    <div className="row justify-content-center gallery-wrapper mb-30-none">
                        <div className="col-lg-3 col-sm-6">
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery05.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery05.jpg" alt="gallery" />
                                </div>
                            </div>
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery06.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery06.jpg" alt="gallery" />
                                </div>
                            </div>
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery07.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery07.jpg" alt="gallery" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 order-lg-1">
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery11.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery11.jpg" alt="gallery" />
                                </div>
                            </div>
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery12.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery12.jpg" alt="gallery" />
                                </div>
                            </div>
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery13.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery13.jpg" alt="gallery" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gallery-item two">
                                <div className="gallery-thumb">
                                    <a href="./assets/images/gallery/gallery08.jpg" className="img-pop">
                                        <i className="flaticon-loupe" />
                                    </a>
                                    <img src="./assets/images/gallery/gallery08.jpg" alt="gallery" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="gallery-item two">
                                        <div className="gallery-thumb">
                                            <a
                                                href="./assets/images/gallery/gallery09.jpg"
                                                className="img-pop"
                                            >
                                                <i className="flaticon-loupe" />
                                            </a>
                                            <img
                                                src="./assets/images/gallery/gallery09.jpg"
                                                alt="gallery"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="gallery-item two">
                                        <div className="gallery-thumb">
                                            <a
                                                href="./assets/images/gallery/gallery10.jpg"
                                                className="img-pop"
                                            >
                                                <i className="flaticon-loupe" />
                                            </a>
                                            <img
                                                src="./assets/images/gallery/gallery10.jpg"
                                                alt="gallery"
                                            />
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

export default Home
