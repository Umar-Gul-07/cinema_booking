import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Movie from './include/Movie';
import api from '../Utils/Axios';

const Movies = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies/");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div>
      <Helmet><title>{title}</title></Helmet>

      <section className="banner-section">
        <div className="banner-bg bg_img bg-fixed"
          style={{ backgroundImage: 'url("./assets/images/banner/banner02.jpg")' }}
        />
        <div className="container">
          <div className="banner-content">
            <h1 className="title bold">
              get <span className="color-theme">movie</span> tickets
            </h1>
            <p>Buy movie tickets in advance, find movie times, watch trailers, read reviews, and more.</p>
          </div>
        </div>
      </section>

      <section className="search-ticket-section padding-top pt-lg-0">
        <div className="container">
          <div className="search-tab bg_img"
            style={{ backgroundImage: 'url("./assets/images/ticket/ticket-bg01.jpg")' }}
          >
            <div className="row align-items-center mb--20">
              <div className="col-lg-6 mb-20">
                <h6 className="category">Welcome to Boleto</h6>
                <h3 className="title">What are you looking for?</h3>
              </div>
              <div className="col-lg-12">
                <div className="tab-area">
                  <div className="tab-item active">
                    <form className="ticket-search-form" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group w-100">
                        <input
                          type="text"
                          placeholder="Search for Movies"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab tab">
                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="row mb-10 justify-content-center">
                      {currentMovies.length > 0 ? (
                        currentMovies.map((movie) => (
                          <Movie key={movie.id} movie={movie} />
                        ))
                      ) : (
                        <strong className='mb-5'>
                          <p className='text-danger m-5'>No movies found.</p>
                        </strong>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination-area text-center">
                <Link to="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                  <i className="fas fa-angle-double-left" /><span>Prev</span>
                </Link>
                {[...Array(totalPages)].map((_, index) => (
                  <Link 
                    key={index + 1} 
                    to="#" 
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Link>
                ))}
                <Link to="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                  <span>Next</span><i className="fas fa-angle-double-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
