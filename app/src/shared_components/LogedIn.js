import "./LogedIn.css";
import Button1 from "./Button1";
import {useState} from "react";

export default function LogedIn(props) {
    const [open, setOpen] = useState(false);
    function profileClicked() {
        if (open){
            document.getElementById('LogedInDropdown').style.display = "none";
            setOpen(false);
        } else {
            document.getElementById('LogedInDropdown').style.display = "block";
            setOpen(true);
        }
    }

    function LogOut(){
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
        window.location.href = "/";
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