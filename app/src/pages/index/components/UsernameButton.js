import axios from "axios";
import {useState} from "react";
import "../css/UsernameButton.css"

function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

function UsernameButton(props) {

    const [username, setUsername] = useState('');

    const handleLogout = () => {
        document.cookie = 'gID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        window.location.reload();
    };

    axios.get('http://127.0.0.1:8000/users_general/getUsername/', {
        params: {
            ID: getCookieValue("gID")
        }
    })
        .then(response => {
            setUsername(response.data.username)
        })
        .catch(error => {
            console.error(error);
        });


    return (
        //promjenio sam onClick sa handlelogout na props.onclick
        <button id={"UsernameButton"} className={`btn btn-outline-danger ${props.className}`} onClick={props.onClick}>👤 {username}</button>
    );
}

export default UsernameButton;