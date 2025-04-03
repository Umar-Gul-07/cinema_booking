import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import TicketPlan from "./Pages/TicketPlan";
import SeatPlan from "./Pages/SeatPlan";
import MovieCheckout from "./Pages/MovieCheckout";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import History from "./Pages/History";
 


function App() {
    return (
        <>
            <BrowserRouter>

                {/* ToastContainer */}
                <ToastContainers/>

                {/* Routes */}
                <Routes>

                    {/* Web Routes */}
                    <Route path='/' element={<Base><Home title={"Home"}/></Base>}/>
                    <Route path='*' element={<PageNotFound404/>}/>

                 <Route path="/movie" element={<Base> <Movies title={"Movies"}/> </Base>}/>
                 <Route path="/history" element={<Base> <History title={"History"}/> </Base>}/>
                 <Route path="/movie-details" element={<Base> <MovieDetails title={"Movie-Details"}/> </Base>}/>
                 <Route path="/ticket-plan" element={<Base> <TicketPlan title={"Ticket-Plan"}/> </Base>}/>
                 <Route path="/seat-plan" element={<Base> <SeatPlan title={"Seat-Plan"}/> </Base>}/>
                 <Route path="/movie-checkout" element={<Base> <MovieCheckout title={"Movie-Checkout"}/> </Base>}/>

                 <Route path="/about-us" element={<Base> <About title={"About Us"}/> </Base>}/>
                 <Route path="/blogs" element={<Base> <Blogs title={"Blogs"}/> </Base>}/>
                 <Route path="/contact-us" element={<Base> <Contact title={"Contact Us"}/> </Base>}/>
                 <Route path="/sign-up" element={<Base> <SignUp title={"Sign-Up"}/> </Base>}/>
                 <Route path="/sign-in" element={<Base> <SignIn title={"Sign-In"}/> </Base>}/>








                    {/* <Route path="/blogs" element={<Base> <Blogs title={"Blogs"}/> </Base>}/>
                    <Route path="/blogs-details/:slug"
                           element={<Base> <BlogsDetails title={"Blogs Details"}/> </Base>}/> */}

    

                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
