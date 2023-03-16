import { Link } from "react-router-dom";
import '../styles/Menu.css';
import whitedog from '../styles/whitedog.svg';

import React from "react";
const NavMenuLayout = () => {
    return (
        <>
            <div className="MenuContainer">
                <div className="MenuComponentLeft">
                    <div className="logo marginTop">
                        <img src={whitedog} />
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/">Start</Link>
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/login">Login</Link>
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/register">Create account</Link>
                    </div>
                    <div className="LinkContainer">
                        <Link className="link" to="/.well-known/acme-challenge/KIXDiZ2b_xtQHMu6c8D0OY49nS4UvhTFCOngdCN1kfU">ssl</Link>
                    </div>
                </div>
            </div>
        </>
    )
};
export default NavMenuLayout;