import "../css/LogInForm.css";
import "../css/IndexApp.css";
import ReactDom from "react-dom";

import {useState} from "react";

let usernameFlag = false;
let passwordFlag = false;

function usernameCheck() {
    let usernameInput = document.getElementById('username').value;
    if(!usernameInput.toLowerCase().match(/^[a-zA-Z0-9_]+$/)){
        usernameFlag = false;
    }
    else usernameFlag = usernameInput.length >= 3;
}

function passwordCheck() {
    let passwordInput = document.getElementById('password').value;
    if(!passwordInput.toLowerCase().match(/^[a-zA-Z0-9]+$/)){
        passwordFlag = false;
    }
    else if(!passwordInput.match(/[A-Z]/)){
        passwordFlag = false;
    }else passwordFlag = passwordInput.length >= 5;
}

function LogInForm(props) {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        if (!(usernameFlag && passwordFlag)) {
            event.preventDefault();
        } else {
            console.log('Form submitted:', formData);
        }
    };

    if(!props.open) return null;

    return ReactDom.createPortal(
        <>
            <div id={"ObscuringDiv"} onClick={props.onClose}></div>
            <div id={"LogInForm"} className={"indexApp"}>
                <div id={"FormHeader"} className={"container-fluid d-flex justify-content-end p-0"}>
                    <div className={"container-fluid d-flex justify-content-center"}>
                        <span id={"FormTitle"}>Prijavi se</span>
                    </div>
                    <button id={"CloseButton"} onClick={props.onClose}>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div id={"DivZaFormu"} className={"d-flex flex-column justify-content-center align-items-center p-3"}>
                        <label htmlFor={"username"}>Korisničko ime: </label>
                        <input id={"username"} className={"mb-3"} name={"username"} placeholder={"Korisničko ime"} type={"text"} onInput={usernameCheck}/>
                        <label htmlFor={"password"}>Šifra: </label>
                        <input id={"password"} className={"mb-3"} name={"password"} placeholder={"Šifra"} type={"password"} onInput={passwordCheck}/>
                        <input id={"RegisterButton"} className={"btn"} type={"submit"} value={"Prijavi se"}/>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default LogInForm;