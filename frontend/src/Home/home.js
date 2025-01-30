import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to My Web App</h1>
            <p className="home-description">Select a feature from the list below:</p>
            <div className="features-grid">
                <div className="feature-item">
                    <Link to="/name">Name</Link>
                </div>
                <div className="feature-item">
                    <Link to="/time">Clock</Link>
                </div>
                <div className="feature-item">
                    <Link to="/p1">Star Pattern 1</Link>
                </div>
                <div className="feature-item">
                    <Link to="/p2">Star Pattern 2</Link>
                </div>
                <div className="feature-item">
                    <Link to="/counter">Counter</Link>
                </div>
                <div className="feature-item">
                    <Link to="/temp">Temperature Converter</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
