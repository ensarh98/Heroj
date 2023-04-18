import "../css/LandingDiv.css"

import FrontLandingComponent from "./FrontLandingComponent";
import PopularInterventions from "./PopularInterventions";
import ArrowDown from "./ArrowDown";

function LandingDiv(props) {
    return (
        <div id={"LandingDiv"} className={"flex-column"}>
            <FrontLandingComponent/>
            <PopularInterventions/>
            <ArrowDown onClick={props.onClick}/>
        </div>
    );
}

export default LandingDiv;
