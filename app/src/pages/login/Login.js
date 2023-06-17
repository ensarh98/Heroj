import { useRef } from "react";
import Button1 from "../../shared_components/Button1";
import Form from "../../shared_components/Form";
import FormControl from "../../shared_components/FormControl";
import FormGroup from "../../shared_components/FormGroup";
import FormInput from "../../shared_components/FormInput";
import FormLabel from "../../shared_components/FormLabel";
import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import LogoComponent from "../../../src/shared_components/LogoComponent";
import Sidebar from "../../shared_components/Sidebar";
import ShowSidebar from "../../shared_components/ShowSidebarButton";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const sidebarRef = useRef(null);

  const cookies = new Cookies();

  const [errors, setErrors] = React.useState({
    username: {
      value: false,
      msg: "",
    },
    password: {
      value: false,
      msg: "",
    },
  });

  const setErrorField = (key, value, msg) => {
    setErrors({
      ...errors,
      [key]: {
        value: value,
        msg: msg,
      },
    });
  };

  const onSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API}forum/login`, {
        username,
        password,
        remember,
      })
      .then((res) => {
        if (res.data.error) {
          setErrorField(res.data.error.field, true, res.data.error.msg);
        } else if (res.data.session_token) {
          cookies.set("session_token", res.data["session_token"], {
            expires: new Date(res.data["expires"]),
          });
          navigate("/");
        }
      });
  };

  const invalidUsername = (username) => {
    return !username.match("^[a-zA-Z0-9_]{5,15}$");
  };

  const invalidPassword = (password) => {
    return !password.match("^[a-zA-Z0-9_]{6,15}$");
  };

  const onChangeUsername = (username) => {
    setUsername(username);
    setErrorField(
      "username",
      invalidUsername(username),
      "Username must contain only alphanumeric values or _, at least 5 and max 15 characters."
    );
  };

  const onChangePassword = (password) => {
    setPassword(password);
    setErrorField(
      "password",
      invalidPassword(password),
      "Password must contain only alphanumeric values or _, at least 6 and max 15 characters."
    );
  };

  const openNav = () => {
    sidebarRef.current.style.left = "0";
  };

  const closeNav = () => {
    sidebarRef.current.style.left = "-400px";
  };

  return (
    <>
      <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
      <div id="heading-left">
        <ShowSidebar onClick={openNav} />
      </div>
      <div className="reg-wrapperr">
        {/* <div className="reg-right"> */}
        <div className="pic-warpperr">
          <div className="head-picc"></div>
        </div>
        <div className="header-text-logg">LOGIN</div>
        <div className="register-formm">
          <Form>
            <FormGroup>
              <FormLabel for={"username"} text={"Korisničko ime"} />
              <FormInput
                name={"username"}
                type={"text"}
                onChange={(e) => onChangeUsername(e.target.value)}
              />
              <FormControl
                text={errors.username.msg}
                isInvalid={errors.username.value}
              />
            </FormGroup>

            <FormGroup paddingBottom={"30px"}>
              <FormLabel for={"password"} text={"Šifra"} />
              <FormInput
                name={"password"}
                type={"password"}
                onChange={(e) => onChangePassword(e.target.value)}
              />
              <FormControl
                text={errors.password.msg}
                isInvalid={errors.password.value}
              />
            </FormGroup>

            <FormGroup>
              <Button1
                text={"Prijavi se"}
                fontSize={"20px"}
                onClick={onSubmit}
              ></Button1>
            </FormGroup>
          </Form>
        </div>

        <div className="logo-component-logg">
          <LogoComponent />
        </div>
      </div>
    </>
  );
}
