import { CreateUser } from "../Api";
import { useState, useEffect } from "react";
import '../styles/Register.css';
import React from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

const Register = () => {
    const [inputUsername, setUsername] = useState("");
    const [inputEmail, setEmail] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onUsernameChange = event => {
        setUsername(event.target.value);
    };
    console.log(inputUsername);

    const onEmailChange = event => {
        setEmail(event.target.value);
    };
    console.log(inputPassword);

    const onPasswordChange = event => {
        setPassword(event.target.value);
    };
    console.log(inputPassword);

    const handleOnRegister = () => {
        PostRegisterDetails();
    }

    async function PostRegisterDetails() {
        try {
            let response = await CreateUser(inputUsername, inputEmail, inputPassword);

            //check if the response was a sucess, 200 means that it was
            if (response.status === 200) {
                let json = await response.json(); //we want to parse the response body as json if it was a sucess

                cookies.set("userInfo", json, {
                    path: "/",
                    sameSite: "none",
                    secure: true,
                });

                navigate("/user");

            } else if (response.status === 400) {
                //we can check for specific error codes like this
                alert(
                    "400 means that the server thinks this request was invalid because of missing or invalid input"
                );
                setErrorRegister(true); //set error value
            } else {
                alert("An unknown error occured");
                setErrorRegister(true); //set error value
            }
        } catch (e) {
            console.error("There was an error");
            console.error(e);
            setErrorRegister(true); //set error value
        }
    }
    return (
        <>
            <h1>Create account</h1>
            <div className="RegisterContainer">
                <input onChange={onUsernameChange} value={inputUsername} className="Input" type="text" placeholder='Username' />
                <input onChange={onEmailChange} value={inputEmail} className="Input" type="text" placeholder='Email' />
                <input onChange={onPasswordChange} value={inputPassword} className="Input" type="password" placeholder='Password' />
                <button onClick={handleOnRegister} className="Button">Submit</button>
            </div>
        </>
    );
};

export default Register;
