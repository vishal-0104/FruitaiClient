// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import TranslatorPage from './pages/TranslatorPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<LoginPage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/chat" element={<ChatbotPage/>} />
                <Route path="/translator" element={<TranslatorPage/>} />
                <Route path="/faq" element={<FAQPage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </Router>
    );
}

export default App;