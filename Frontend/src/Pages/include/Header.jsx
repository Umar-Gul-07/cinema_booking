import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="preloader" style={{ display: "none" }}>
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span />
                        <span />
                    </div>
                </div>
            </div>


            <div className="overlay" />


            <Link to="#0" className="scrollToTop active">
                <i className="fas fa-angle-up" />
            </Link >


            <header className="header-section header-active">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link >
                        </div>
                        <ul className="menu">
                            <li>
                                <Link to="/" className="">
                                    Home
                                </Link >
                                
                            </li>
                            <li  >
                                <Link to="/movie">Movies</Link>
                            
                            </li>
                             
                            <li  >
                                <Link to="/about-us">About Us</Link >
                            
                            </li>
                           
                            <li >
                                <Link to="/blogs">blog</Link >
                                
                            </li>
                            <li>
                                <Link to="/contact-us">contact</Link >
                            </li>
                            <li className="header-button pr-0">
                                <Link to="/sign-up">join us</Link >
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Header
