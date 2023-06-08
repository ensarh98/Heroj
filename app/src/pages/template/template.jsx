import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TemplateHeader } from './TemplateHeader';
import { StepContent } from './StepContent';
import { NavigationButtons } from './NavigationButtons';
import './Template.css';

const Template = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/template/${id}/`)
            .then((res) => {
                setTemplate(res.data);
            })
            .catch((error) => {
                console.error('Error fetching template:', error);
            });
    }, [id]);

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    const handleButtonClick = () => {
        navigate('/');
    };

    if (!template) {
        return <p>Loading...</p>;
    }

    const { title, steps } = template;
    const currentStepData = steps[currentStep];

    return (
        <div id="tempDiv1">
            <div id="tempDiv2">
                <TemplateHeader title={title} />
                <StepContent step={currentStepData} />
                <NavigationButtons
                    hasPreviousStep={currentStep > 0}
                    hasNextStep={currentStep < steps.length - 1}
                    onPreviousStep={handlePreviousStep}
                    onNextStep={handleNextStep}
                    onButtonClick={handleButtonClick}
                />
            </div>
        </div>
    );
};

export default Template;
