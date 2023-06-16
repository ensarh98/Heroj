import { useState } from 'react';
import './PreviousButton.css';

const NextButton = (props) => {
    const [color2, setColor2] = useState("#ffffff");
    var temp2 = 1;

    return (
        <button className="PreviousButton" onClick={props.onClick}>
            <svg width="75px" height="75px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
                stroke="#5378f4" strokeWidth="0.6" transform="matrix(-1, 0, 0, 1, 0, 0)">
                <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)">
                    <rect x="0" y="0" width="24.00" height="24.00" rx="12"
                        fill={color2 ? color2 : "#c8ddfc"}
                        onClick={() => {
                            temp2 += 1;
                            temp2 % 2 ? setColor2("#c8ddfc") : setColor2("ffffff");
                            console.log(color2)
                        }}
                        strokeWidth="0"></rect>
                </g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M10.25 16.25C10.1493 16.2466 10.0503 16.2227 9.95921 16.1797C9.86807 16.1367 9.78668 16.0756 9.72001 16C9.57956 15.8594 9.50067 15.6688 9.50067 15.47C9.50067 15.2713 9.57956 15.0806 9.72001 14.94L12.72 11.94L9.72001 8.94002C9.66069 8.79601 9.64767 8.63711 9.68277 8.48536C9.71786 8.33361 9.79933 8.19656 9.91586 8.09322C10.0324 7.98988 10.1782 7.92538 10.3331 7.90868C10.4879 7.89198 10.6441 7.92391 10.78 8.00002L14.28 11.5C14.4205 11.6407 14.4994 11.8313 14.4994 12.03C14.4994 12.2288 14.4205 12.4194 14.28 12.56L10.78 16C10.7133 16.0756 10.6319 16.1367 10.5408 16.1797C10.4497 16.2227 10.3507 16.2466 10.25 16.25Z" fill="#5378f4"></path>
                </g>
            </svg>

        </button>

    )
}

export default NextButton;