import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StepContent = ({ step }) => (
    <div id="stepDiv">
        <p id="nStep">{step.step_number}. Korak: {step.description}</p>
    </div>
);