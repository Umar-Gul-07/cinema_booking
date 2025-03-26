import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import api from '../Utils/Axios';
import { Link, useNavigate } from "react-router-dom"
import { Store } from '../Utils/Store';
import { toast } from 'react-toastify';
const SignIn = ({ title }) => {
    const { dispatch } = useContext(Store);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()

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
            const response = await api.post('/auth/login/', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            setSuccess('Login successful!');
            // Store user token in localStorage
            localStorage.setItem("userToken", response.data.key); // Store in localStorage
            dispatch({ type: "UserLoggedIn", payload: response.data.key }); // Update global state
            toast.success("Logged In Successfully");

            navigate("/");

        } catch (err) {
            console.log(err)
            setError(err.response?.data?.message || 'Login failed. Please try again.');
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
                                <span className="cate">hello</span>
                                <h2 className="title">welcome back</h2>
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
                                    <label htmlFor="password">
                                        Password<span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal2" required defaultChecked />
                                    <label htmlFor="bal2">remember password</label>
                                    <a href="#0" className="forget-pass">Forget Password</a>
                                </div>


                                <div className="form-group text-center">
                                    <input type="submit" disabled={loading} />
                                </div>
                            </form>

                            <div className="option">
                                Don't have an account? <Link to="/sign-up">sign up now</Link>
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

export default SignIn;
