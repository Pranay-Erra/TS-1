import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';  
const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to My Web App</h1>
            <p>Select a feature from the list below:</p>
            <div className="features-container">
                <div className="feature-card">
                    <h3>Name</h3>
                    <Link to="/name">Go to Name</Link>
                </div>
                <div className="feature-card">
                    <h3>Clock</h3>
                    <Link to="/time">Go to Clock</Link>
                </div>
                <div className="feature-card">
                    <h3>Star Pattern 1</h3>
                    <Link to="/p1">Go to Pattern 1</Link>
                </div>
                <div className="feature-card">
                    <h3>Star Pattern 2</h3>
                    <Link to="/p2">Go to Pattern 2</Link>
                </div>
                <div className="feature-card">
                    <h3>Counter</h3>
                    <Link to="/counter">Go to Counter</Link>
                </div>
                <div className="feature-card">
                    <h3>Temperature Converter</h3>
                    <Link to="/temp">Go to Converter</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
