import { SignIn } from "../Api";
import '../styles/Register.css';
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import { DotLoader } from "react-spinners";

const Login = () => {
    const [inputUsername, setUsername] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onUsernameChange = event => {
        setUsername(event.target.value);
    };


    const onPasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleOnLogin = () => {
        setIsLoading(true);
        PostLoginDetails();
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleOnLogin();
        }
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
                setIsLoading(false);
                navigate("/user");
            } else if (response.status === 400) {
                setIsLoading(false);
                //we can check for specific error codes like this
                alert(
                    "400 means that the server thinks this request was invalid because of missing or invalid input"
                );
                setErrorLogin(true); //set error value
            } else {
                setIsLoading(false);
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
        <><h1>Log in</h1>
            {!isLoading ? (
                <>
                    <div className="RegisterContainer">
                        <input onChange={onUsernameChange} value={inputUsername} className="Input" type="text" placeholder='Username' />
                        <input onKeyUp={handleEnter} onChange={onPasswordChange} value={inputPassword} className="Input" type="password" placeholder='Password' />
                        <button onClick={handleOnLogin} className="Button">Submit</button>
                    </div>
                </>
            ) : (<><DotLoader color="#c9c7c7" /></>)}

        </>
    );
};

export default Login;
