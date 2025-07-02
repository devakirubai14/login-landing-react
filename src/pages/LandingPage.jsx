import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LandingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || 'Guest';

    const [activeSection, setActiveSection] = useState('profile');

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <p>This is your profile, <strong>{username}</strong>. You can view and edit your info here.</p>;
            case 'about':
                return <p>This is a demonstration of a React login and landing page flow, built for a user task. It showcases routing, state management, and conditional rendering.</p>;
            case 'contact':
                return (
                    <form className="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4"></textarea>
                        <button type="submit">Send</button>
                    </form>
                );
            default:
                return null;
        }
    }

    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome, <span>{username}</span>!</h1>
            </header>
            
            <div className="nav-buttons">
                <button 
                    onClick={() => setActiveSection('profile')}
                    className={activeSection === 'profile' ? 'active' : ''}
                >
                    Profile
                </button>
                <button 
                    onClick={() => setActiveSection('about')}
                    className={activeSection === 'about' ? 'active' : ''}
                >
                    About
                </button>
                <button 
                    onClick={() => setActiveSection('contact')}
                    className={activeSection === 'contact' ? 'active' : ''}
                >
                    Contact Us
                </button>
            </div>
            
            <div className="content-section">
                {renderContent()}
            </div>
            
            <button onClick={() => navigate('/')} className="logout-button">Logout</button>
        </div>
    );
};

export default LandingPage;