import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TemplateHeader } from './TemplateHeader';
import { StepContent } from './StepContent';
import './Template.css';
import Button1 from '../../shared_components/Button1';
import Sidebar from '../../shared_components/Sidebar';
import ShowSidebar from '../../shared_components/ShowSidebarButton';

const Template = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);

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

    const sidebarRef = useRef(null);

    const openNav = () => {
        sidebarRef.current.style.left = '0';
    };

    const closeNav = () => {
        sidebarRef.current.style.left = '-400px';
    };

    const handleNextStep = () => {
        if (currentStep < steps.length - 1 && !isLastStep) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 0 && !isFirstStep) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    if (!template) {
        return <p>Loading...</p>;
    }

    const { title, steps } = template;
    const currentStepData = steps[currentStep];

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;

    return (
        <div id="tempPage">
            <div id="tempBar">
                <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
                <div id="heading-left">
                    <ShowSidebar onClick={openNav} />
                </div>
            </div>
            <div id="tempDiv">
                <div id="tempHead">
                    <TemplateHeader title={title} />
                </div>
                <div id="tempContent">
                    <StepContent step={currentStepData} />
                </div>
                <div id="tempButtons">
                    <div id="buttonBack">
                        {isFirstStep ? (
                            <a href='http://localhost:3000/'>
                                <Button1
                                    id="but1"
                                    text={'Back'}
                                    fontSize={'25px'}
                                    disabled={isFirstStep}
                                />
                            </a>
                        ) : (
                            <Button1
                                id="but1"
                                text={'Back'}
                                fontSize={'25px'}
                                onClick={isFirstStep ? null : handlePreviousStep}
                                disabled={isFirstStep}
                            />
                        )}
                    </div>
                    
                    {!isLastStep && (
                        <div id="buttonNext">
                        <Button1
                            text={'Next'}
                            fontSize={'25px'}
                            onClick={isLastStep ? null : handleNextStep}
                            disabled={isLastStep}
                        />
                    </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default Template;
