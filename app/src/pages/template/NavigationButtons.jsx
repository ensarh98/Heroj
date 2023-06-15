import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationButtons.css';

export const NavigationButtons = ({ onPreviousStep, onNextStep, onButtonClick }) => (
    <div id="navB" style={{}}>
        <button id="back" onClick={onPreviousStep}></button>
        <button id="next" onClick={onNextStep}></button>
    </div>
);
