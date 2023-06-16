import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StepContent = ({ step }) => (
    <p id="nStep">
        <span id="stepNum"><b>{step.step_number}.</b></span>
        <span id="stepDesc">{" " + step.description}</span>
    </p>
);