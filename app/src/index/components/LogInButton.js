function LogInButton(props) {
    return (
        <button className={`btn btn-outline-danger ${props.className}`} onClick={props.onClick}>Prijavi se</button>
    );
}

export default LogInButton;