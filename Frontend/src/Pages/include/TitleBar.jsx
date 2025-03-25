import React from 'react';
import { Link } from 'react-router-dom';

const TileBar = ({ title }) => {
    return (
        <div>
            <section 
                className="main-page-header speaker-banner bg_img" 
                data-background="./assets/images/banner/banner07.jpg" 
                style={{ backgroundImage: `url(./assets/images/banner/banner07.jpg)` }}
            >
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">{title}</h2>
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TileBar;
