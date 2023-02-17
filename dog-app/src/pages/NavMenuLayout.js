import { Link } from "react-router-dom";
import '../styles/Menu.css';
import React from "react";

const NavMenuLayout = () => {
    return (
        <>
            <div className="MenuContainer">
                <div className="MenuComponentLeft">
                    <div className="LinkContainer">
                        <Link className="link" to="/">Start</Link>
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/dogopedia">Dogopedia</Link>
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/element">Element</Link>
                    </div>
                </div>
                <div className="MenuComponentRight">
                    <div className="LinkContainer">
                        <Link className="link" to="/register">Signup</Link>
                    </div>
                    <div className="MarginRight">
                        <Link className="link" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
};
export default NavMenuLayout;