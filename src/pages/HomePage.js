import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-container centered-content">
            <div className="background-overlay"></div>
            <div className="content">
                <h1>Fruit.ai Home</h1>
                <div className="flex-container">
                    <Link to="/chat" className="grid-item">Chat</Link>
                    <Link to="/translator" className="grid-item">Translator</Link>
                    <Link to="/faq" className="grid-item">FAQ</Link>
                    <Link to="/about" className="grid-item">About</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;