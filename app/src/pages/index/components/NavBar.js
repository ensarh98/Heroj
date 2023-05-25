import "../css/NavBar.css"

import ForumButton from "./ForumButton";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import PredavanjaButton from "./PredavanjaButton";
import UsernameButton from "./UsernameButton";

function NavBar(props) {
    const hasCookie = document.cookie.includes('gID');

    return (
        <nav className="navbar d-flex justify-content-center justify-content-sm-end fixed-top">
            <span className={"SpanZaHeroj flex-grow-1"}>Heroj</span>
            <ForumButton className="mx-sm-4 mx-3 buttons" />
            {!hasCookie && <SignUpButton className="mx-sm-4 mx-3 buttons" onClick={props.onClick} />}
            {!hasCookie && <LogInButton className="mx-sm-4 mx-3 buttons" onClick={props.onClick2} />}
            {hasCookie && <PredavanjaButton className="mx-sm-4 mx-3 buttons" />}
            {hasCookie && <UsernameButton className="mx-sm-4 mx-3 buttons" onClick={props.onClick3}/>}
        </nav>
    );
}

export default NavBar;
