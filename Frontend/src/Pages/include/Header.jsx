import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../Utils/Store';
import { toast } from 'react-toastify';

const Header = () => {
    const { state , dispatch} = useContext(Store);
    const { UserInfo } = state;

    const handleLogout = () => {
        localStorage.removeItem("UserInfo");
        dispatch({ type: "UserLoggedOut" });
        toast.success("Logged Out Successfully");
    };
    

    // State to handle dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            {/* Preloader */}
            <div className="preloader" style={{ display: "none" }}>
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div className="overlay" />

            {/* Scroll to Top Button */}
            <Link to="#0" className="scrollToTop active">
                <i className="fas fa-angle-up" />
            </Link>

            {/* Header Section */}
            <header className="header-section header-active">
                <div className="container">
                    <div className="header-wrapper">
                        {/* Logo */}
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>

                        {/* Navigation Menu */}
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/movie">Movies</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/blogs">Blog</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>

                            {UserInfo ? (
                                // Account Dropdown (Works with React State)
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" style={{color:"#31d7a9"}} onClick={toggleDropdown}>
                                        ACCOUNT
                                    </span>
                                    <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                                        <li><Link className="dropdown-item text-dark" to="/history">History</Link></li>
                                        <li><Link className="dropdown-item text-dark" onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </li>
                            ) : (
                                <>
                                    <li className="header-button pr-0">
                                        <Link to="/sign-up">Join Us</Link>
                                    </li>
                                    <li className="header-button pr-0">
                                        <Link to="/sign-in">Login</Link>
                                    </li>
                                </>
                            )}
                        </ul>

                        {/* Mobile Menu Toggle */}
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>

            {/* Custom Dropdown Styles */}
            <style>
                {`
                .dropdown-menu {
                    display: none;
                    position: absolute;
                    background: white;
                    list-style: none;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }

                .dropdown-menu.show {
                    display: block;
                }

                .dropdown-toggle {
                    cursor: pointer;
                    font-weight: bold;
                    padding: 10px;
                }
                `}
            </style>
        </>
    );
};

export default Header;
