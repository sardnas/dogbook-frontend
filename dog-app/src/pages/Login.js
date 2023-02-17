import { SignIn } from "../Api";
import '../styles/Register.css';
import { useState, useEffect } from "react";
import React from "react";

const Login = () => {
    const [inputUsername, setUsername] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    const onUsernameChange = event => {
        setUsername(event.target.value);
    };
    console.log(inputUsername);


    const onPasswordChange = event => {
        setPassword(event.target.value);
    };
    console.log(inputPassword);

    const handleOnClick = () => {
        PostLoginDetails();
    }

    async function PostLoginDetails() {
        try {
            let response = await SignIn(inputUsername, inputPassword);

            //check if the response was a sucess, 200 means that it was
            if (response.status === 200) {
                let json = await response.json(); //we want to parse the response body as json if it was a sucess

                console.log(json); //don't publish code with this line! I just added it here to show that
                //it can be quite usefull to write the value of the json object to the console
                //you could try to write out the value of response too if there is something that is not working

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
                <button onClick={handleOnClick} className="Button">Submit</button>
            </div>
        </>
    );
};

export default Login;
