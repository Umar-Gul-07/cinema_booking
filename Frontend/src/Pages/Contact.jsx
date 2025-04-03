import React, { useContext } from 'react'
import TitleBar from './include/TitleBar'
import { Helmet } from 'react-helmet'
import { Store } from '../Utils/Store'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../Utils/Axios'

const Contact = ({ title }) => {
    const { state } = useContext(Store)
    const { ContactInfo } = state
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object from the form and convert it to an object
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());

        try {
            // Send a POST request to the backend using Axios
            const response = await api.post('/contact/', formObject);

            if (response.status === 200) {
                // Redirect to the thank-you page or show success message
                toast.success("Submitted SuccessFully")
                navigate("/")
            } else {
                // Handle unexpected status codes here
                alert("Something went wrong");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an error submitting the form. Please try again.");
        }
    };


    return (
        <div>
            <Helmet><title>{title}</title></Helmet>
            <TitleBar title={title} />

            <section className="contact-section padding-top">
                <div className="contact-container">
                    <div
                        className="bg-thumb bg_img"
                        data-background="./assets/images/contact/contact.jpg"
                        style={{ backgroundImage: 'url("./assets/images/contact/contact.jpg")' }}
                    />
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-7 col-lg-6 col-xl-5">
                                <div className="section-header-3 left-style">
                                    <span className="cate">contact us</span>
                                    <h2 className="title">get in touch</h2>
                                    <p>
                                        We’d love to talk about how we can work together. Send us a
                                        message below and we’ll respond as soon as possible.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} className="contact-form" id="contact_form_submit">
                                    <div className="form-group">
                                        <label htmlFor="name">Name <span>*</span></label>
                                        <input type="text" name="name" id="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email <span>*</span></label>
                                        <input type="email" name="email" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject <span>*</span></label>
                                        <input type="text" name="subject" id="subject" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message <span>*</span></label>
                                        <textarea name="message" id="message" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" />
                                    </div>
                                </form>


                            </div>
                            <div className="col-md-5 col-lg-6">
                                <div className="padding-top padding-bottom contact-info">
                                    <div className="info-area">
                                        <div className="info-item">
                                            <div className="info-thumb">
                                                <img
                                                    src="./assets/images/contact/contact01.png"
                                                    alt="contact"
                                                />
                                            </div>
                                            <div className="info-content">
                                                <h6 className="title">Phone number</h6>
                                                <a href="Tel:82828282034">{ContactInfo.contact_phone}</a>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-thumb">
                                                <img
                                                    src="./assets/images/contact/contact02.png"
                                                    alt="contact"
                                                />
                                            </div>
                                            <div className="info-content">
                                                <h6 className="title">Email</h6>
                                                <Link to={`mailto:${ContactInfo.contact_email}`}>{ContactInfo.contact_email}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-counter padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-counter-item">
                                <div className="contact-counter-thumb">
                                    <i className="fab fa-facebook-f" />
                                </div>
                                <div className="contact-counter-content">
                                    <div className="counter-item">
                                        <h5
                                            className="title odometer odometer-auto-theme"
                                            data-odometer-final={130}
                                        >
                                            <div className="odometer-inside">
                                                <span className="odometer-digit">
                                                    <span className="odometer-digit-spacer">8</span>
                                                    <span className="odometer-digit-inner">
                                                        <span className="odometer-ribbon">
                                                            <span className="odometer-ribbon-inner">
                                                                <span className="odometer-value">0</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </h5>
                                        <h5 className="title">k</h5>
                                    </div>
                                    <p>Followers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-counter-item active">
                                <div className="contact-counter-thumb">
                                    <i className="fas fa-users" />
                                </div>
                                <div className="contact-counter-content">
                                    <div className="counter-item">
                                        <h5
                                            className="title odometer odometer-auto-theme"
                                            data-odometer-final={35}
                                        >
                                            <div className="odometer-inside">
                                                <span className="odometer-digit">
                                                    <span className="odometer-digit-spacer">8</span>
                                                    <span className="odometer-digit-inner">
                                                        <span className="odometer-ribbon">
                                                            <span className="odometer-ribbon-inner">
                                                                <span className="odometer-value">0</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </h5>
                                        <h5 className="title">k</h5>
                                    </div>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-counter-item">
                                <div className="contact-counter-thumb">
                                    <i className="fab fa-twitter" />
                                </div>
                                <div className="contact-counter-content">
                                    <div className="counter-item">
                                        <h5
                                            className="title odometer odometer-auto-theme"
                                            data-odometer-final={47}
                                        >
                                            <div className="odometer-inside">
                                                <span className="odometer-digit">
                                                    <span className="odometer-digit-spacer">8</span>
                                                    <span className="odometer-digit-inner">
                                                        <span className="odometer-ribbon">
                                                            <span className="odometer-ribbon-inner">
                                                                <span className="odometer-value">0</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </h5>
                                        <h5 className="title">k</h5>
                                    </div>
                                    <p>Followers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-counter-item">
                                <div className="contact-counter-thumb">
                                    <i className="fas fa-envelope" />
                                </div>
                                <div className="contact-counter-content">
                                    <div className="counter-item">
                                        <h5
                                            className="title odometer odometer-auto-theme"
                                            data-odometer-final={291}
                                        >
                                            <div className="odometer-inside">
                                                <span className="odometer-digit">
                                                    <span className="odometer-digit-spacer">8</span>
                                                    <span className="odometer-digit-inner">
                                                        <span className="odometer-ribbon">
                                                            <span className="odometer-ribbon-inner">
                                                                <span className="odometer-value">0</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </h5>
                                        <h5 className="title">k</h5>
                                    </div>
                                    <p>Subscribers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Contact
