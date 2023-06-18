import { useRef } from "react";
import Button1 from "../../shared_components/Button1";
import Form from "../../shared_components/Form";
import FormControl from "../../shared_components/FormControl";
import FormGroup from "../../shared_components/FormGroup";
import FormInput from "../../shared_components/FormInput";
import FormLabel from "../../shared_components/FormLabel";
import "./register.css";
import LogoComponent from "../../../src/shared_components/LogoComponent";
import Sidebar from "../../shared_components/Sidebar";
import ShowSidebar from "../../shared_components/ShowSidebarButton";

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const sidebarRef = useRef(null);

  const [success, setSuccess] = React.useState(false);

  const [errors, setErrors] = React.useState({
    email: {
      value: false,
      msg: "",
    },
    username: {
      value: false,
      msg: "",
    },
    password: {
      value: false,
      msg: "",
    },
    confirmPassword: {
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
      .post(`${process.env.REACT_APP_API}forum/register`, {
        email,
        username,
        password,
      })
      .then((res) => {
        if (res.data.error) {
          setErrorField(res.data.error.field, true, res.data.error.msg);
        } else if (res.data.success) {
          setSuccess(true);
        }
      });
  };

  const invalidUsername = (username) => {
    return !username.match("^[a-zA-Z0-9_]{5,15}$");
  };

  const invalidEmail = (email) => {
    return !email.match(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
  };

  const invalidPassword = (password) => {
    return !password.match("^[a-zA-Z0-9_]{6,15}$");
  };

  const invalidConfirmPassword = (confirmPassword) => {
    return confirmPassword !== password;
  };

  const onChangeUsername = (username) => {
    setUsername(username);
    setErrorField(
      "username",
      invalidUsername(username),
      "Username must contain only alphanumeric values or _, at least 5 and max 15 characters."
    );
  };

  const onChangeEmail = (email) => {
    setEmail(email);
    setErrorField("email", invalidEmail(email), "Email format is not valid.");
  };

  const onChangePassword = (password) => {
    setPassword(password);
    setErrorField(
      "password",
      invalidPassword(password),
      "Password must contain only alphanumeric values or _, at least 6 and max 15 characters."
    );
  };

  const onChangeConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    setErrorField(
      "confirmPassword",
      invalidConfirmPassword(confirmPassword),
      "Passwords must match!"
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
      <div className="reg-wrapper">
        <div className="pic-warpper">
          <div className="head-pic"></div>
        </div>
        <div className="header-text-reg">REGISTRACIJA</div>
        <div className="register-form">
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

            <FormGroup>
              <FormLabel for={"email"} text={"Email"} />
              <FormInput
                name={"email"}
                type={"email"}
                onChange={(e) => onChangeEmail(e.target.value)}
              />
              <FormControl
                text={errors.email.msg}
                isInvalid={errors.email.value}
              />
            </FormGroup>

            <FormGroup>
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

            <FormGroup paddingBottom={"30px"}>
              <FormLabel for={"confirmPassword"} text={"Ponovi Šifru"} />
              <FormInput
                name={"confirmPassword"}
                type={"password"}
                onChange={(e) => onChangeConfirmPassword(e.target.value)}
              />
              <FormControl
                text={errors.confirmPassword.msg}
                isInvalid={errors.confirmPassword.value}
              />
            </FormGroup>

            <div className="reg-button">
              <FormGroup>
                <Button1
                  text={"Registriraj se"}
                  fontSize={"20px"}
                  onClick={onSubmit}
                ></Button1>
              </FormGroup>
              <div className="register-and-login-text">
                <span className="vec-ste-registrovani">
                  Već ste registrovani?
                </span>
                <Link to="/login" className="login-text-button">
                  Login
                </Link>
              </div>
            </div>
          </Form>
          {success &&
            "Uspješno ste se registrirali! Provjerite email za aktivaciju vašeg računa."}
        </div>

        <div className="logo-component-reg">
          <LogoComponent />
        </div>
      </div>
    </>
  );
}
