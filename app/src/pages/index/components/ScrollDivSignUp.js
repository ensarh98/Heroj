import SignUpButton from "./SignUpButton";

function ScrollDivSignUp(props) {
    return (
        <div id={props.id} className={"d-flex flex-wrap justify-content-center align-items-center"}>
            <span>Registriraj se pa budi i ti heroj!</span>
            <SignUpButton onClick = {props.onClick} className={props.className}/>
        </div>
    );
}

export default ScrollDivSignUp;