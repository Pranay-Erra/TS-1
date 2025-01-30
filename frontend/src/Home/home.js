import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to My Web App</h1>
            <p>Select a feature from the list below:</p>
            <ul>
                <li><Link to="/name">Name</Link></li>
                <li><Link to="/time">Clock</Link></li>
                <li><Link to="/p1">Star Pattern 1</Link></li>
                <li><Link to="/p2">Star Pattern 2</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/temp">Temperature Converter</Link></li>
            </ul>
        </div>
    );
};

export default Home;
