import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StepContent = ({ step }) => (
    <div id="stepDiv">
        <p id="nStep">
            <span id="stepNum">{step.step_number}.</span>
            <span id="stepDesc">{" " + step.description}</span>
        </p>
    </div>
);