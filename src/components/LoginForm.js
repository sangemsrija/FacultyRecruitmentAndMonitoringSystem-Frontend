import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import UserLogin from './UserLogin';
import RecruiterLogin from './RecruiterLogin';
import Header from './Header';
import './Login.css'; // Import CSS file for styling


function WorkingLogin() {
    const location = useLocation(); // Access location state
    const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

    useEffect(() => {
        // Check if tabIndex is set in location state
        if (location.state && location.state.tabNumber) {
            setActiveTab(location.state.tabNumber);
        }
    }, [location.state]); // Re-run effect when location state changes

    const handleTabClick = (tabNumber1) => {
        setActiveTab(tabNumber1);
    };

    return (
        <>
            <Header />
            <br/>
            <div className="tab-container">
                <div className="login-work-tab-buttons">
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>User</button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>Recruiter</button>
        
                </div>
                <div className="tab-content">
                    {activeTab === 1 && <UserLogin />}
                    {activeTab === 2 && <RecruiterLogin />}
                    
                </div>
            </div>
        </>
    );
}

export default WorkingLogin;