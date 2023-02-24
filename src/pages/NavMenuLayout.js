import { Link } from "react-router-dom";
import '../styles/Menu.css';
import React from "react";
import Cookies from "universal-cookie";
import whitedog from '../styles/whitedog.svg';

const NavMenuLayout = () => {
    const cookies = new Cookies();
    const userInfo = cookies.get("userInfo");
    const isLoggedIn = userInfo !== undefined && userInfo != null;
    return (
        <>
            <div className="MenuContainer">

                <div className="MenuComponentLeft">
                    <div className="logo marginTop">
                        <img src={whitedog} />
                    </div>
                    <div></div>
                    <div className="LinkContainer">
                        <Link className="link" to="/user">Start</Link>
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/user/dogopedia">Dogopedia</Link>
                    </div>

                </div>
                <div className="MenuComponentRight">
                    <div className="MarginRight">
                        <div className="link">User: {(isLoggedIn ? (userInfo.username) : ("undefined"))}</div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default NavMenuLayout;

/*
                    <div className="LinkContainer">
                        <Link className="link" to="/user/mydogs">My dogs</Link>
                    </div>*/