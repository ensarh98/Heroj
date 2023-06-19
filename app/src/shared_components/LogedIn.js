import "./LogedIn.css";
import {useState} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export default function LogedIn(props) {
    const [open, setOpen] = useState(false);

    const ucookies = new Cookies();

    function profileClicked() {
        if (open){
            document.getElementById('LogedInDropdown').style.display = "none";
            setOpen(false);
        } else {
            document.getElementById('LogedInDropdown').style.display = "block";
            setOpen(true);
        }
    }

    function LogOut() {
        axios.post(`${process.env.REACT_APP_API}forum/logout`, {
            id: ucookies.get('session_token')
        }).then((res) => {
            if (res.data.success) {
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                }
                window.location.href = "/";
            }
        });
    }



    return(
        <div className={"LogedIn"}>
            <span className={"LogedInUsername"}>{props.username}</span>
            <div className={"ForLogedInDropdown"}>
                <img src={"../../../images/TopicCardLeftImage.png"} className={"ImageLogedIn"} onClick={profileClicked}/>
                <div id={"LogedInDropdown"}>
                    <div onClick={LogOut} className={"LogedInDropdownOption"}>Log Out</div>
                </div>
            </div>
        </div>
    )
}