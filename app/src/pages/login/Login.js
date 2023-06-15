import Button1 from "../../shared_components/Button1";
import Form from "../../shared_components/Form";
import FormControl from "../../shared_components/FormControl";
import FormGroup from "../../shared_components/FormGroup";
import FormInput from "../../shared_components/FormInput";
import FormLabel from "../../shared_components/FormLabel";

import React from "react";
import axios from "axios";

export default function Login(){

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [success, setSuccess] = React.useState(false);

    const [errors, setErrors] = React.useState({
        username: {
            value: false,
            msg: ''
        },
        password: {
            value: false,
            msg: ''
        },
    });

    const setErrorField = (key, value, msg) => {
        setErrors({
            ...errors,
            [key]: {
                value: value,
                msg: msg
            }
        })
    }

    const onSubmit = () => {
        axios.post(`${process.env.REACT_APP_API}forum/login`, {
            username,
            password
        }).then((res) => {
            if (res.status === 201) {
                setSuccess(true);
            } else if (res.status === 200) {
                if (res.data === 'username already exists') {
                    setErrorField('username', true, 'Username is not avalible.');
                }
            }
        });
    }

    const invalidUsername = (username) => {
        return !username.match("^[a-zA-Z0-9_]{5,15}$");
    }

    const invalidPassword = (password) => {
        return !password.match("^[a-zA-Z0-9_]{6,15}$");
    }

    const onChangeUsername = (username) => {
        setUsername(username);
        setErrorField(
            'username',
            invalidUsername(username),
            'Username must contain only alphanumeric values or _, at least 5 and max 15 characters.'
        );
    }

    const onChangePassword = (password) => {
        setPassword(password);
        setErrorField(
            'password',
            invalidPassword(password),
            'Password must contain only alphanumeric values or _, at least 6 and max 15 characters.'
        );
    }

    return (
        <div>
            <Form>
                <FormGroup>
                    <FormLabel for={"username"} text={"Korisničko ime"}/>
                    <FormInput name={"username"} type={"text"} onChange={e => onChangeUsername(e.target.value)}/>
                    <FormControl text={errors.username.msg} isInvalid={errors.username.value}/>
                </FormGroup>

                <FormGroup>
                    <FormLabel for={"password"} text={"Šifra"}/>
                    <FormInput name={"password"} type={"password"} onChange={e => onChangePassword(e.target.value)}/>
                    <FormControl text={errors.password.msg} isInvalid={errors.password.value}/>
                </FormGroup>

                <FormGroup>
                    <Button1 text={"Prijavi se"} fontSize={"20px"}></Button1>
                </FormGroup>
        </Form>
        </div>
    )
}