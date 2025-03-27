import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom';

const SeatPlan = ({ title }) => {
  const location = useLocation();
  const movieData = location.state?.movieData;
const showtimeId = location.state?.showtimeId;
const [showtime, setShowtime] = useState(null);
const [timeLeft, setTimeLeft] = useState(null);

useEffect(() => {
  if (movieData?.showtimes && showtimeId) {
    const filteredShowtime = movieData.showtimes.find(
      (st) => st.id === showtimeId
    );
    setShowtime(filteredShowtime);
  }
}, [movieData, showtimeId]);

useEffect(() => {
  if (!showtime) return;

  const updateCountdown = () => {
    const now = new Date();
    
    // Parse the showtime date and time
    const showDateTime = new Date(`${showtime.date} ${showtime.time}`);
    
    const diffMs = showDateTime - now;
    const diffMinutes = Math.max(Math.floor(diffMs / 60000), 0);

    setTimeLeft(diffMinutes);
  };

  updateCountdown();
  const interval = setInterval(updateCountdown, 60000); // Update every minute

  return () => clearInterval(interval);
}, [showtime]);
  console.log(movieData)
  if (!movieData) {
    return <p>No movie data available.</p>;  // Handle if no data is received
  }
  return (
    <div>
      <Helmet><title>{title}</title></Helmet>

      <section
        className="details-banner hero-area bg_img seat-plan-banner"
        data-background="./assets/images/banner/banner04.jpg"
        style={{ backgroundImage: 'url("./assets/images/banner/banner04.jpg")' }}
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content style-two">
              <h3 className="title">{movieData.movie.title}</h3>
              <div className="tags">
                <a href="#0">{movieData.movie.type}</a>
                <a href="#0">{movieData.movie.languages} - {movieData.movie.formats}</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="page-title bg-one">
        <div className="container">
          <div className="page-title-area">
            <div className="item md-order-1">
              <Link to={{
                pathname: "/ticket-plan",
              }}
                state={{ movieId: movieData.movie.id }} className="custom-button back-button">
                <i className="flaticon-double-right-arrows-angles" />
                back
              </Link>
            </div>
            <div className="item date-item">
              <span className="date">{showtime ? showtime.date : "No date available"}</span>
              <div className="select-bar ">
                <span className="current m-1">{showtime ? showtime.time : "No time available"}</span>
              </div>
            </div>
            <div className="item">
            <h5 className="title">{timeLeft !== null ? `${timeLeft} mins` : "Loading..."}</h5>
            <p>Mins Left</p>
            </div>
          </div>
        </div>
      </section>



      <div className="seat-plan-section padding-bottom padding-top">
        <div className="container">
          <div className="screen-area">
            <h4 className="screen">screen</h4>
            <div className="screen-thumb">
              <img src="./assets/images/movie/screen-thumb.png" alt="movie" />
            </div>
            <h5 className="subtitle">silver plus</h5>
            <div className="screen-wrapper">
              <ul className="seat-area">
                <li className="seat-line">
                  <span>G</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                      </ul>
                    </li>
                    <li className="front-seat">
                      <ul>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                      </ul>
                    </li>
                    <li className="front-seat">
                      <ul>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span>G</span>
                </li>
                <li className="seat-line">
                  <span>f</span>
                  <ul className="seat--area">
                    <li className="front-seat">
                      <ul>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                      </ul>
                    </li>
                    <li className="front-seat">
                      <ul>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat seat-free">
                          <img
                            src="./assets/images/movie/seat01-free.png"
                            alt="seat"
                          />
                          <span className="sit-num">f7</span>
                        </li>
                        <li className="single-seat seat-free">
                          <img
                            src="./assets/images/movie/seat01-free.png"
                            alt="seat"
                          />
                          <span className="sit-num">f8</span>
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                      </ul>
                    </li>
                    <li className="front-seat">
                      <ul>
                        <li className="single-seat seat-free">
                          <img
                            src="./assets/images/movie/seat01-free.png"
                            alt="seat"
                          />
                          <span className="sit-num">f9</span>
                        </li>
                        <li className="single-seat seat-free">
                          <img
                            src="./assets/images/movie/seat01-free.png"
                            alt="seat"
                          />
                          <span className="sit-num">f10</span>
                        </li>
                        <li className="single-seat seat-free">
                          <img
                            src="./assets/images/movie/seat01-free.png"
                            alt="seat"
                          />
                          <span className="sit-num">f11</span>
                        </li>
                        <li className="single-seat">
                          <img src="./assets/images/movie/seat01.png" alt="seat" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span>f</span>
                </li>
              </ul>
            </div>
            
          </div>
          <div
            className="proceed-book bg_img"
            data-background="./assets/images/movie/movie-bg-proceed.jpg"
            style={{
              backgroundImage: 'url("./assets/images/movie/movie-bg-proceed.jpg")'
            }}
          >
            <div className="proceed-to-book">
              <div className="book-item">
                <span>You have Choosed Seat</span>
                <h3 className="title">d9, d10</h3>
              </div>
              <div className="book-item">
                <span>total price</span>
                <h3 className="title">$150</h3>
              </div>
              <div className="book-item">
                <a href="movie-checkout.html" className="custom-button">
                  proceed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default SeatPlan
