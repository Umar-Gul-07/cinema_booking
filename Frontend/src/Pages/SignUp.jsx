import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import api from '../Utils/Axios';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
const SignUp = ({ title }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await api.post('/auth/registration/', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            setSuccess('Registration successful!');
            toast.success("Registration successful! Please check your email.")
            navigate("/sign-in")
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Helmet><title>{title}</title></Helmet>

            {/* Preloader (unchanged) */}
            {loading && (
                <div className="preloader">
                    <div className="preloader-inner">
                        <div className="preloader-icon">
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            )}

            <section
                className="account-section bg_img"
                data-background="./assets/images/account/account-bg.jpg"
                style={{ backgroundImage: 'url("./assets/images/account/account-bg.jpg")' }}
            >
                <div className="container">
                    <div className="padding-top padding-bottom">
                        <div className="account-area">
                            <div className="section-header-3">
                                <span className="cate">welcome</span>
                                <h2 className="title">to Boleto </h2>
                            </div>

                            {/* Error/Success Messages */}
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <form className="account-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        Username<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Username"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email<span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">
                                        Password<span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password1"
                                        name="password1"
                                        value={formData.password1}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">
                                        Confirm Password<span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        id="password2"
                                        name="password2"
                                        value={formData.password2}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal" required defaultChecked />
                                    <label htmlFor="bal">
                                        I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a>
                                    </label>
                                </div>
                                <div className="form-group text-center">
                                  
                                    <div className="form-group text-center">
                                    <input type="submit" defaultValue="Sign Up" />
                                </div>
                                </div>
                            </form>

                            <div className="option">
                                Already have an account? <a href="/sign-in">Login</a>
                            </div>

                            <div className="or"><span>Or</span></div>

                            {/* Social Login (unchanged) */}
                            <ul className="social-icons">
                                <li><a href="#0"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#0" className="active"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#0"><i className="fab fa-google" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
