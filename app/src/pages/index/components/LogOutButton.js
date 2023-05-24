
function LogOuButton(props) {
    const handleLogout = () => {
        document.cookie = 'gID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        window.location.reload();
    };

    return (
        <button className={`btn btn-outline-danger ${props.className}`} onClick={handleLogout}>Odjavi se</button>
    );
}

export default LogOuButton;