import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { Store } from '../Utils/Store';
import StripeCheckout from 'react-stripe-checkout'; // Add Stripe Checkout component
import api from '../Utils/Axios';
import { toast } from 'react-toastify';

const SeatPlan = ({ title }) => {
  const location = useLocation();
  const movieData = location.state?.movieData;
  const showtimeId = location.state?.showtimeId;
  const { state } = useContext(Store);
  const { UserInfo } = state;
  const [showtime, setShowtime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [User, setUser] = useState()

  useEffect(() => {
    const fetchSeat = () => {
      if (!showtime?.screen?.id) return;
      api
        .get(`/seats/${showtime.screen.id}/`)
        .then((res) => setSeats(res.data.seats))
        .catch((err) => console.error(err));
    };
    const fetchUserDetails = async () => {
      try {
        const response = await api.get("/user-info/", {
          headers: { Authorization: `Token ${UserInfo}` }, // Add token in headers
        });
        setUser(response.data)
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        return { name: "Guest", email: "guest@example.com" }; // Default values
      }
    };
    fetchUserDetails();
  

    fetchSeat();
  

  }, [showtime]);


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
      const showDateTime = new Date(`${showtime.date} ${showtime.time}`);
      const diffMs = showDateTime - now;
      const diffMinutes = Math.max(Math.floor(diffMs / 60000), 0);
      setTimeLeft(diffMinutes);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [showtime]);

  if (!movieData) {
    return <p>No movie data available.</p>;
  }

  const toggleSeat = (seatId) => {
    setSelectedSeats((prevSelected) => {
      const newSelected = prevSelected.includes(seatId)
        ? prevSelected.filter((id) => id !== seatId)
        : [...prevSelected, seatId];
      
      // Update total price
      const pricePerSeat = showtime?.price || 0;
      setTotalPrice(newSelected.length * pricePerSeat);
      
      return newSelected;
    });
  };

  
  
  

  const handleStripePayment = async (token) => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before proceeding.");
      return;
    }
  
    try {
      const response = await api.post("/book-seat/", {
        seat_ids: selectedSeats, // Send selected seat IDs
        customer_name: User?.name || "Guest",
        customer_email: User?.email || "guest@example.com",
        showtime_id: showtimeId,
        stripe_token: token.id,
      });
  
      if (response.data.message) {
        toast.success("Booking successful! 🎉")
        setSelectedSeats([]); // Reset seat selection
        setTotalPrice(0);
        // Refresh seat data to mark booked seats
        api.get(`/seats/${showtime.screen.id}/`)
          .then((res) => setSeats(res.data.seats))
          .catch((err) => console.error(err));
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };


  



  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>

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
  {seats.length > 0 ? (
    seats.reduce((rows, seat, index) => {
      if (index % 10 === 0) rows.push([]); // Start a new row every 10 seats
      rows[rows.length - 1].push(seat);
      return rows;
    }, []).map((row, rowIndex) => (
      <div key={rowIndex} className="d-flex justify-content-center gap-2 mb-2">
        {row.map((seat) => (
          <li
            key={seat.id}
            className="single-seat list-unstyled"
            onClick={() => toggleSeat(seat.id)}
            style={{
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor: selectedSeats.includes(seat.id) ? "#6c757d" : "transparent",
              borderRadius: "5px",
              padding: "5px",
              opacity: seat.booked ? 0.5 : 1, // Gray out booked seats
              pointerEvents: seat.booked ? "none" : "auto", // Disable click on booked seats
            }}
          >
            <img src="./assets/images/movie/seat01.png" alt="seat" />
          </li>
        ))}
      </div>
    ))
  ) : (
    <p>Loading seats...</p>
  )}
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
                <h3 className="title">{selectedSeats.join(', ')}</h3>
              </div>
              <div className="book-item">
                <span>total price</span>
                <h3 className="title">{totalPrice} £</h3>
              </div>
              <div className="book-item">
                {/* Stripe Button Integration */}
                <StripeCheckout
                  stripeKey="pk_test_51OGbliKue2i3LW4Npe6oAwbcfHyFSSUdcRPKRejkqG5z1WggCgT2MnaW3ayQaPV6gnVugP7w3C5crbJyug9weV1e00CESUwd87"
                  token={handleStripePayment}
                  amount={totalPrice * 100} // Amount in cents
                  currency="GBP"
                  name="Movie Ticket Booking"
                  description="Book your tickets now!"
                  email={User?.email}
                >
                  <button className="custom-button">Proceed</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatPlan;
