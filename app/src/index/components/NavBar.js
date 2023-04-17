import "../css/NavBar.css"

import ForumButton from "./ForumButton";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";

function NavBar(props) {
    return (
        <nav className={"navbar d-flex justify-content-center justify-content-sm-end fixed-top"}>
            <ForumButton className={"mx-sm-4 mx-3 buttons"}/>
            <SignUpButton className={"mx-sm-4 mx-3 buttons"} onClick = {props.onClick}/>
            <LogInButton className={"mx-sm-4 mx-3 buttons"} onClick = {props.onClick2}/>
        </nav>
    );
}

export default NavBar;
