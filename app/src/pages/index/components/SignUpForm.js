import "../css/SignUpForm.css";
import ReactDom from "react-dom";
import {useState} from "react";

let usernameFlag = false;
let emailFlag = false;
let password1Flag = false;
let password2Flag = false;
let dateFlag = false;

function usernameCheck() {
    let usernameInput = document.getElementById('username').value;
    let usernameSpan = document.getElementById('usernameSpan');
    if(!usernameInput.toLowerCase().match(/^[a-zA-Z0-9_]+$/)){
        usernameSpan.innerHTML = 'Samo slova, brojevi i _ dozvoljeno!';
        usernameFlag = false;
    }
    else if(usernameInput.length < 3){
        usernameSpan.innerHTML = 'Username mora imati minimalno 3 karaktera!';
        usernameFlag = false;
    }
    else {
        usernameSpan.innerHTML = ''
        usernameFlag = true;
    }
}

function emailCheck(){
    let emailInput = document.getElementById('email').value;
    let emailSpan = document.getElementById('emailSpan');
    if(!emailInput.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailSpan.innerHTML = 'E-mail nema validan oblik!';
        emailFlag = false;
    }
    else {
        emailSpan.innerHTML = ''
        emailFlag = true;
    }
}

function passwordCheck() {
    let passwordInput = document.getElementById('password1').value;
    let passwordSpan = document.getElementById('password1Span');
    if(!passwordInput.toLowerCase().match(/^[a-zA-Z0-9]+$/)){
        passwordSpan.innerHTML = 'Samo slova, brojevi i _ dozvoljeno!';
        password1Flag = false;
    }
    else if(!passwordInput.match(/[A-Z]/)){
        passwordSpan.innerHTML = 'Mora da sadrži veliko slovo!';
        password1Flag = false;
    }else if(passwordInput.length < 5){
        passwordSpan.innerHTML = 'Šifra mora imati minimalno 5 karaktera!';
        password1Flag = false;
    }
    else {
        passwordSpan.innerHTML = ''
        password1Flag = true;
    }
}

function passwordCheck2() {
    let password1Input = document.getElementById('password1').value;
    let password2Input = document.getElementById('password2').value;
    let passwordSpan = document.getElementById('password2Span');
    if(password1Input !== password2Input){
        passwordSpan.innerHTML = 'Šifre se ne podudaraju!';
        password2Flag = false;
    } else {
        passwordSpan.innerHTML = ''
        password2Flag = true;
    }
}

function dateCheck() {
    var parts = document.getElementById('date').value.split("-");
    let dateSpan = document.getElementById('dateSpan');

    var year = parseInt(parts[0]);
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[2], 10);
    var maxDay = new Date(year, month, 0).getDate();

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        dateSpan.innerHTML = 'Netačan unos datuma!';
        dateFlag = false;
    }
    else if (month < 1 || month > 12) {
        dateSpan.innerHTML = 'Netačan unos datuma!';
        dateFlag = false;
    }
    else if(day < 1 || day > maxDay) {
        dateSpan.innerHTML = 'Netačan unos datuma!';
        dateFlag = false;
    }else{
        dateSpan.innerHTML = '';
        dateFlag = true;
    }
}

function SignUpForm(props) {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        if (!(usernameFlag && emailFlag && password1Flag && password2Flag && dateFlag)) {
            event.preventDefault();
        } else {
            console.log('Form submitted:', formData);
        }
    };


    if(!props.open) return null;

    return ReactDom.createPortal(
        <>
            <div id={"ObscuringDiv"} onClick={props.onClose}></div>
            <div id={"SignUpForm"}>
                <div id={"FormHeader"} className={"container-fluid d-flex justify-content-end p-0"}>
                    <div className={"container-fluid d-flex justify-content-center"}>
                        <span id={"FormTitle"}>Registriraj se</span>
                    </div>
                    <button id={"CloseButton"} onClick={props.onClose}>X</button>
                </div>
                <form id={'Form'} onSubmit={handleSubmit}>
                    <div id={"DivZaFormu"} className={"d-flex flex-column justify-content-center align-items-center p-3"}>
                            <label htmlFor={"username"}>Korisničko ime: </label>
                            <input id={"username"} name={"username"} placeholder={"Korisničko ime"} type={"text"} onInput={usernameCheck}/><span id={"usernameSpan"} className={"validationSpan"}></span>
                            <label htmlFor={"email"}>E-mail: </label>
                            <input id={"email"} name={"email"} placeholder={"E-mail"} type={"email"} onInput={emailCheck}/><span id={"emailSpan"} className={"validationSpan"}></span>
                            <label htmlFor={"password"}>Šifra: </label>
                            <input id={"password1"} name={"password"} placeholder={"Šifra"} type={"password"} onInput={passwordCheck}/><span id={"password1Span"} className={"validationSpan"}></span>
                            <label htmlFor={"password_repeat"}>Ponovi šifru: </label>
                            <input id={"password2"} name={"password_repeat"} placeholder={"Ponovi šifru"} type={"password"} onInput={passwordCheck2}/><span id={"password2Span"} className={"validationSpan"}></span>
                            <label htmlFor={"birth_date"}>Datum rođenja: </label>
                            <input id={"date"} className={"mb-3"} name={"birth_date"} type={"date"} onInput={dateCheck}/><span id={"dateSpan"} className={"validationSpan"}></span>
                            <input id={"RegisterButton"} className={"btn"} type={"submit"} value={"Registriraj se"}/>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default SignUpForm;