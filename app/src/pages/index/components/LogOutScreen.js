import ReactDom from "react-dom";
import "../css/LogOutScreen.css";

function LogOutScreen(props) {
    const handleLogout = () => {
        document.cookie = 'gID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        window.location.reload();
    };

    if(!props.open) return null;

    return ReactDom.createPortal(
        <>
            <div id={"ObscuringDiv"} onClick={props.onClose}></div>
            <div id={"LogOutScreen"}>
                <div id={"LogOutScreenHeader"} className={"container-fluid d-flex justify-content-end p-0"}>
                    <div className={"container-fluid d-flex justify-content-center"}>
                        <span id={"LogOutScreenTitle"}>Odjavi se?</span>
                    </div>
                    <button id={"CloseButton"} onClick={props.onClose}>X</button>
                </div>
                    <div id={"DivZaLogOutScreen"} className={"d-flex flex-column justify-content-center align-items-center p-3"}>
                        <span className={"spanForButtons"}>
                            <input className={"btn LogOutOptions"} type={"button"} value={"Da"} onClick={handleLogout}/>
                            <input className={"btn LogOutOptions"} type={"button"} value={"Ne"} onClick={props.onClose}/>
                        </span>
                    </div>
            </div>
        </>,
        document.getElementById("portal")
    );

}


export default LogOutScreen;