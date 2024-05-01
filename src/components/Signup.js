import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserSignup from './UserSignUp';
import RecruiterSignup from './RecruiterSignup';

import Header from './Header';
import './Signup.css';

function Signup(props) {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

    useEffect(() => {
        if (location.state && location.state.tabNumber) {
            setActiveTab(location.state.tabNumber);
        }
    }, [location.state]);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <Header/>
            <br/>
            <div className="signup-work-container">
                <div className="signup-work-content">
                    <div className="signup-work-tab-buttons">
                        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>User</button>
                        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>Recruiter</button>
                        {/* <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>Tab 3</button> */}
                    </div>
                    <div className="tab-content">
                        {activeTab === 1 && <UserSignup/>}
                        {activeTab === 2 && <RecruiterSignup />}
                        
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Signup;