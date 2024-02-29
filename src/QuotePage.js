import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuotePage() {
    let navigate = useNavigate();
    return (
        <div className="quote-display-parent">
            <div className="quote-display-container">
                <h1 className="quote-display-item">
                    ‘ The moment you accept what troubles you've been given, the door will open. ’
                    <br></br>
                    <br></br>
                    --Rumi
                </h1>
                <div className="quote-display-item">
                    <button className="general-button" onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default QuotePage;