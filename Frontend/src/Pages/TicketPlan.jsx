import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import api from '../Utils/Axios';

const TicketPlan = ({ title }) => {
  const location = useLocation();
  const movieId = location.state?.movieId;

  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
      try {
        const response = await api.get(`/movies/${movieId}/`);
        setMovieData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movieData || !movieData.movie) return <p>No data found</p>;

  return (
    <div>
      <Helmet>
        <title>{title || movieData.movie.title || 'Movie Details'}</title>
      </Helmet>

      <section
        className="details-banner hero-area bg_img"
        style={{ backgroundImage: `url(${movieData.movie.background_image || './assets/images/banner/banner03.jpg'})` }}
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content">
              <h3 className="title">{movieData.movie.title}</h3>
              <div className="tags">
                {movieData.movie.languages.split(', ').map((lang, index) => (
                  <span key={index} className="badge bg-primary me-2">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticket-plan-section padding-bottom padding-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-5 mb-lg-0">
              <ul className="seat-plan-wrapper bg-five">
                {movieData.cinemas && movieData.cinemas.length > 0 ? (
                  movieData.cinemas.map((cinema) => (
                    <li key={cinema.id}>
                      <div className="movie-name">
                        <div className="icons">
                          <i className="far fa-heart" />
                          <i className="fas fa-heart" />
                        </div>
                        <span className="name">{cinema.name}</span>
                        <div className="location-icon">
                          <i className="fas fa-map-marker-alt" /> {cinema.location}
                        </div>
                      </div>
                      <div className="movie-schedule">
                        {movieData.showtimes && movieData.showtimes.length > 0
                          ? movieData.showtimes
                            .filter((show) => cinema.screens.some(screen => screen.id === show.screen.id))
                            .map((show) => (
                              <div key={show.id} className="item">
                                <Link
                                  className='text-white'
                                  to={{
                                    pathname: "/seat-plan",
                                  }}
                                  state={{ movieData: movieData,showtimeId:show.id }}  // Pass movieData here

                                >
                                  {show.screen.screen_number}
                                </Link>
                              </div>
                            ))
                          : <p>No showtimes available.</p>}
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No cinemas available.</p>
                )}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img src="./assets/images/sidebar/banner/banner03.jpg" alt="banner" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default TicketPlan;
