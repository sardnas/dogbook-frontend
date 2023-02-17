import React from "react";
import '../styles/Signout.css';
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

const Signout = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const Logout = () => {
        cookies.remove("userInfo", {
            path: "/",
            sameSite: "none",
            secure: true,
        });
        navigate("/");
        //window.location.reload();
    }
    return (
        <div className="signoutButtonContainer">
            <div onClick={() => {
                Logout(cookies);
            }}>Log out</div>
        </div>
    );
};


export default Signout;