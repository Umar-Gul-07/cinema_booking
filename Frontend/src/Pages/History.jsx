import { useContext, useEffect, useState } from "react";
import TitleBar from "./include/TitleBar";
import { Store } from "../Utils/Store";
import api from "../Utils/Axios";

const History = ({ title }) => {
    const { state } = useContext(Store);
    const { UserInfo } = state;
    const [User, setUser] = useState(null);
    const [Booking, setBooking] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get("/user-info/", {
                    headers: { Authorization: `Token ${UserInfo}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user info:", error);
                setUser({ name: "Guest", email: "guest@example.com" });
            }
        };

        const fetchBooking = async () => {
            try {
                const response = await api.get("/bookings/");
                setBooking(response.data);
                console.log("below")
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching booking:", error);
            }
        };

        fetchUserDetails();
        fetchBooking();
    }, []);

    // Filter bookings for the logged-in user
    const userBookings = Booking?.filter(
        (booking) => booking.customer_email === User?.email
    );

    return (
        <>
            <TitleBar title={`Booking ${title}`} />
            <div className="container mt-4">
                {userBookings.length > 0 ? (
                    <div className="table-responsive my-5">
                        <table className="table table-bordered table-striped">
                            <thead className=" text-white">
                                <tr>
                                    <th>#</th>
                                    <th>Showtime</th>
                                    <th>Seats</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                {userBookings.map((booking, index) => (
                                    <tr key={booking.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {/* Render movie title and showtime */}
                                            {booking.showtime && booking.showtime.movie ? (
                                                <>
                                                    {booking.showtime.movie.title} - {booking.showtime.date} at {booking.showtime.time}
                                                </>
                                            ) : (
                                                <span>No Movie Info</span>
                                            )}
                                        </td>
                                        <td>
                                            {/* Render booked seat numbers */}
                                            {booking.seats.map(seat => seat.seat_number).join(", ")}
                                        </td>
                                        <td>${booking.total_price}</td>
                                        <td>
                                            <span
                                                className={`badge ${booking.status === "confirmed" ? "bg-success" : "bg-danger"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>


                        </table>
                    </div>
                ) : (
                    <p className="text-center text-muted">No bookings found.</p>
                )}
            </div>
        </>
    );
};

export default History;
