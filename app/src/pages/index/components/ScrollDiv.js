import React from 'react';
import "../css/ScrollDiv.css"

import ScrollDivInformation from "./ScrollDivInformation";
import ScrollDivSignUp from "./ScrollDivSignUp";

const ScrollDiv = React.forwardRef((props, ref) => {
    return (
        <div id={"ScrollDiv"} ref={ref} className={"container-fluid d-flex flex-wrap justify-content-evenly align-items-center"}>
            <ScrollDivInformation id={"ScrollDivInformation"} className={"ScrollDivButtons"}/>
            <ScrollDivSignUp id={"ScrollDivSignUp"} className={"ScrollDivButtons"} onClick = {props.onClick}/>
        </div>
    );
});

export default ScrollDiv;
