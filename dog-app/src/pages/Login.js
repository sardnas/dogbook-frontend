import { SignIn } from "../Api";
import '../styles/Register.css';
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

const Login = () => {
    const [inputUsername, setUsername] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onUsernameChange = event => {
        setUsername(event.target.value);
    };


    const onPasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleOnLogin = () => {
        PostLoginDetails();
    }


    async function PostLoginDetails() {
        try {
            let response = await SignIn(inputUsername, inputPassword);

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
                setErrorLogin(true); //set error value
            } else {
                alert("An unknown error occured");
                setErrorLogin(true); //set error value
            }
        } catch (e) {
            console.error("There was an error");
            console.error(e);
            setErrorLogin(true); //set error value
        }
    }


    return (
        <>
            <h1>Log in</h1>
            <div className="RegisterContainer">
                <input onChange={onUsernameChange} value={inputUsername} className="Input" type="text" placeholder='Username' />
                <input onChange={onPasswordChange} value={inputPassword} className="Input" type="password" placeholder='Password' />
                <button onClick={handleOnLogin} className="Button">Submit</button>
            </div>
        </>
    );
};

export default Login;
