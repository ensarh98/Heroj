import "../css/NavBar.css"

import ForumButton from "./ForumButton";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import PredavanjaButton from "./PredavanjaButton";
import LogOutButton from "./LogOutButton";

function NavBar(props) {
    const hasCookie = document.cookie.includes('gID');

    return (
        <nav className="navbar d-flex justify-content-center justify-content-sm-end fixed-top">
            <ForumButton className="mx-sm-4 mx-3 buttons" />
            {!hasCookie && <SignUpButton className="mx-sm-4 mx-3 buttons" onClick={props.onClick} />}
            {!hasCookie && <LogInButton className="mx-sm-4 mx-3 buttons" onClick={props.onClick2} />}
            {hasCookie && <PredavanjaButton className="mx-sm-4 mx-3 buttons" />}
            {hasCookie && <LogOutButton className="mx-sm-4 mx-3 buttons" />}
        </nav>
    );
}

export default NavBar;
