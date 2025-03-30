import React, { useContext } from 'react'
import { Store } from '../../Utils/Store'
import { Link } from 'react-router-dom'

const Footer = () => {
    const {state} = useContext(Store)
    const {ContactInfo} = state
    return (
        <div>
            <footer className="footer-section">
                <div className="newslater-section padding-bottom">
                    <div className="container">
                        <div
                            className="newslater-container bg_img"
                            data-background="./assets/images/newslater/newslater-bg01.jpg"
                            style={{
                                backgroundImage: 'url("./assets/images/newslater/newslater-bg01.jpg")'
                            }}
                        >
                            <div className="newslater-wrapper">
                                <h5 className="cate">subscribe to Boleto </h5>
                                <h3 className="title">to get exclusive benifits</h3>
                                <form className="newslater-form">
                                    <input type="text" placeholder="Your Email Address" />
                                    <button type="submit">subscribe</button>
                                </form>
                                <p>We respect your privacy, so we never share your info</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-top">
                        <div className="logo">
                            <Link to="/">
                                <img src="./assets/images/footer/footer-logo.png" alt="footer" />
                            </Link>
                        </div>
                        <ul className="social-icons">
                            <li>
                                <Link to={ContactInfo.facebook}>
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to={ContactInfo.twitter} className="active">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to={ContactInfo.youtube}>
                                    <i className="fab fa-youtube" />
                                </Link>
                            </li>
                            <li>
                                <Link to={ContactInfo.linkedin}>
                                    <i className="fab fa-linkedin" />
                                </Link>
                            </li>
                            <li>
                                <Link to={ContactInfo.instagram}>
                                    <i className="fab fa-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-area">
                            <div className="left">
                                <p>
                                    Copyright © 2020.All Rights Reserved By <Link to="#0">Boleto </Link>
                                </p>
                            </div>
                            <ul className="links">
                                <li>
                                    <Link to="#0">About</Link>
                                </li>
                                <li>
                                    <Link to="#0">Terms Of Use</Link>
                                </li>
                                <li>
                                    <Link to="#0">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#0">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="#0">Feedback</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
