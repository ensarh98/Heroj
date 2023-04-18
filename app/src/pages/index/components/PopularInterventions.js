import "../css/PopularInterventions.css"

import FrontLandingComponent from "./FrontLandingComponent";
import Intervention from "./Intervention";

function PopularInterventions() {
    return (
        <div id={"PopularInterventions"} className={"d-flex flex-wrap justify-content-center align-items-center"}>
            <Intervention className={"intervention"} name={"Epilepsija"} href={"Epilepsija"}/>
            <Intervention className={"intervention"} name={"Alergična Reakcija"} href={"Epilepsija"}/>
            <Intervention className={"intervention"} name={"Smrt"} href={"Epilepsija"}/>
            <Intervention className={"intervention"} name={"Ospice"} href={"Epilepsija"}/>
            <Intervention className={"intervention"} name={"Epileptični Šok"} href={"Epilepsija"}/>
        </div>
    );
}

export default PopularInterventions;
