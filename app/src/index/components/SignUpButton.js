function SignUpButton(props) {
    return (
        <button onClick={props.onClick} className={`btn btn-outline-danger ${props.className}`}>Registriraj se</button>
    );
}

export default SignUpButton;