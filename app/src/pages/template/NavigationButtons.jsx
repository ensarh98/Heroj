import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationButtons.css';

export const NavigationButtons = ({ onPreviousStep, onNextStep, onButtonClick }) => (
    <div id="navB" style={{}}>
        <button id="back" onClick={onPreviousStep}>Back</button>
        <button id="next" onClick={onNextStep}>Next</button>
        <button id="homepg" onClick={onButtonClick}>Home</button>
    </div>
);
