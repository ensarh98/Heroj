import SiteSymbol from "./SiteSymbol";
import SearchBarWithButton from "./SearchBarWithButton";
import CallNumbers from "./CallNumbers";

function FrontLandingComponent() {
    return (
        <div id={"FrontLandingComponent"} className={"container-fluid d-flex flex-column flex-wrap align-items-center mb-5"}>
            <SiteSymbol/>
            <SearchBarWithButton/>
            <CallNumbers/>
        </div>
    );
}

export default FrontLandingComponent;