import "../css/LogInForm.css";
import ReactDom from "react-dom";

import {useState} from "react";
import axios from "axios";

/*
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
*/
function LogInForm(props) {
    let usernameSpan = document.getElementById('usernameSpanLogin');
    let passwordSpan = document.getElementById('passwordSpanLogin');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            username: username,
            password: password,
        };
        axios.post('http://127.0.0.1:8000/users_general/login/', formData)
            .then(response => {
                document.cookie =  'gID=' + response.data
                window.location.reload();

            })
            .catch(error => {
                if(error.response.data === 'No user'){
                    usernameSpan.innerHTML = 'User ne postoji'
                    passwordSpan.innerHTML = ''
                }
                else if(error.response.data === 'Wrong password'){
                    passwordSpan.innerHTML = 'Netačna šifra'
                    usernameSpan.innerHTML = ''
                }
                console.error(error);  // Handle any error that occurred
            });

    }

    if(!props.open) return null;

    return ReactDom.createPortal(
        <>
            <div id={"ObscuringDiv"} onClick={props.onClose}></div>
            <div id={"LogInForm"}>
                <div id={"FormHeader"} className={"container-fluid d-flex justify-content-end p-0"}>
                    <div className={"container-fluid d-flex justify-content-center"}>
                        <span id={"FormTitle"}>Prijavi se</span>
                    </div>
                    <button id={"CloseButton"} onClick={props.onClose}>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div id={"DivZaFormu"} className={"d-flex flex-column justify-content-center align-items-center p-3"}>
                        <label htmlFor={"username"}>Korisničko ime: </label>
                        <input id={"username"} name={"username"} placeholder={"Korisničko ime"} type={"text"} value={username} onChange={(e) => setUsername(e.target.value)}/><span id={"usernameSpanLogin"} className={"validationSpan"}></span>
                        <label htmlFor={"password"}>Šifra: </label>
                        <input id={"password"} name={"password"} placeholder={"Šifra"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/><span id={"passwordSpanLogin"} className={"validationSpan"}></span>
                        <input id={"RegisterButton"} className={"btn"} type={"submit"} value={"Prijavi se"}/>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default LogInForm;