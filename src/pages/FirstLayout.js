import React from "react";
import '../styles/Register.css';
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import FirstMenuLayout from "./FirstMenuLayout";

const FirstLayout = () => {
    return (
        <>
            <FirstMenuLayout />
            <Outlet />
        </>
    )
};

export default FirstLayout;