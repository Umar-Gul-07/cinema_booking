import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom';

const SeatPlan = ({ title }) => {
  const location = useLocation();
  const movieData = location.state?.movieData;
  const showtimeId = location.state?.showtimeId;
  const [showtime, setShowtime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

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

  const toggleSeat = (seatIndex) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatIndex)
        ? prevSelected.filter((seat) => seat !== seatIndex) // Deselect seat
        : [...prevSelected, seatIndex] // Select seat
    );
  };

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
              <strong>
                <span style={{ fontSize: "18px" }} className="date">Amount : {showtime ? showtime.price : "No price available"} £</span>
                <span style={{ fontSize: "18px" }} className="date">Date : {showtime ? showtime.date : "No date available"}</span>
                <span style={{ fontSize: "18px" }} className="date">Time : {showtime ? showtime.time : "No time available"}</span>
              </strong>

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
          <div className="screen-wrapper d-flex flex-column align-items-center">
            <div className="seat-area">
              {showtime ? (
                <>
                  {Array.from({ length: Math.ceil(showtime.screen.capacity / 10) }).map((_, rowIndex) => (
                    <div key={rowIndex} className="d-flex justify-content-center gap-2 mb-2">
                      {Array.from({ length: 10 }).map((_, colIndex) => {
                        const seatIndex = rowIndex * 10 + colIndex;
                        return seatIndex < showtime.screen.capacity ? (
                          <li
                            key={seatIndex}
                            className="single-seat list-unstyled"
                            onClick={() => toggleSeat(seatIndex)}
                            style={{
                              cursor: "pointer",
                              transition: "0.3s",
                              backgroundColor: selectedSeats.includes(seatIndex) ? "#6c757d" : "transparent", // Change to dark gray when clicked
                              borderRadius: "5px",
                              padding: "5px"
                            }}
                          >
                            <img src="./assets/images/movie/seat01.png" alt="seat" />
                          </li>
                        ) : null;
                      })}

                    </div>

                  ))}
                </>
              ) : null}

            </div>
            <div className='mb-5'>
              <Link to={{
                pathname: "/ticket-plan",
              }}
                state={{ movieId: movieData.movie.id }} className="custom-button back-button">
                Confirm
              </Link>
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
