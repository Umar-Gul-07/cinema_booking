import React from 'react'
import { Link } from 'react-router-dom'

function Movie({movie}) {
    console.log(movie)
    return (
            <div className="col-sm-6 col-lg-4">
                <div className="movie-grid">
                    <div className="movie-thumb c-thumb">
                        <Link to="/movie-details">
                            <img
                                src={movie.background_image}
                                alt="movie"
                            />
                        </Link>
                    </div>
                    <div className="movie-content bg-one">
                        <h5 className="title m-0">
                        <Link to="/movie-details" state={{ movie }}>{movie.title}</Link>
                        </h5>
                        <ul className="movie-rating-percent">
                            <li>
                                <div className="thumb">
                                  <i className='fa fa-tv'></i>
                                </div>
                                <span className="content">{movie.duration}</span>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Movie
