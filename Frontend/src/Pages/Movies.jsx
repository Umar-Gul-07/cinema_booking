import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Movie from './include/Movie';
import api from '../Utils/Axios';

const Movies = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({
    language: [],
    format: [],
    genre: []
  });

  // Fetch movies based on filters
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies/", {
          params: {
            language: filters.language.join(","),
            format: filters.format.join(","),
            genre: filters.genre.join(","),
          }
        });
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [filters]); // Runs when filters change

  // Handle checkbox change
  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value) // Remove if exists
        : [...prevFilters[category], value]; // Add if not exists
      
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  return (
    <div>
      <Helmet><title>{title}</title></Helmet>

      {/* Banner Section */}
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

      {/* Search Section */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Movie Section with Filters */}
      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            
            {/* Sidebar Filters */}
            <div className="col-sm-10 col-md-8 col-lg-3">
              <div className="widget-1 widget-check">
                <div className="widget-header">
                  <h5 className="m-title">Filter By</h5> 
                  <Link to="#" onClick={() => setFilters({ language: [], format: [], genre: [] })}>
                    Clear All
                  </Link>
                </div>
                <div className="widget-1-body">
                  {/* Language Filter */}
                  <h6 className="subtitle">Language</h6>
                  {["English", "Hindi", "Spanish", "Tamil", "Telugu"].map(lang => (
                    <div className="form-group" key={lang}>
                      <input 
                        type="checkbox" 
                        checked={filters.language.includes(lang)}
                        onChange={() => handleFilterChange("language", lang)} 
                      />
                      <label>{lang}</label>
                    </div>
                  ))}

                  {/* Format Filter */}
                  <h6 className="subtitle">Experience</h6>
                  {["2D", "3D", "IMAX"].map(format => (
                    <div className="form-group" key={format}>
                      <input 
                        type="checkbox" 
                        checked={filters.format.includes(format)}
                        onChange={() => handleFilterChange("format", format)} 
                      />
                      <label>{format}</label>
                    </div>
                  ))}

                  {/* Genre Filter */}
                  <h6 className="subtitle">Genre</h6>
                  {["Action", "Comedy", "Drama", "Sci-Fi", "Horror"].map(genre => (
                    <div className="form-group" key={genre}>
                      <input 
                        type="checkbox" 
                        checked={filters.genre.includes(genre)}
                        onChange={() => handleFilterChange("genre", genre)} 
                      />
                      <label>{genre}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Movie Listings */}
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab tab">
                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="row mb-10 justify-content-center">
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
              </div>

              {/* Pagination */}
              <div className="pagination-area text-center">
                <Link to="#"><i className="fas fa-angle-double-left" /><span>Prev</span></Link>
                <Link to="#">1</Link>
                <Link to="#">2</Link>
                <Link to="#" className="active">3</Link>
                <Link to="#">4</Link>
                <Link to="#">5</Link>
                <Link to="#"><span>Next</span><i className="fas fa-angle-double-right" /></Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
