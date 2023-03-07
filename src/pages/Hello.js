import React from "react";
import InterActiveDog from "./InterActiveDog";
import '../styles/start.css';
const Hello = () => {
    return (
        <>
            <h1>Welcome to the best website about dogs!</h1>
            <div className="dogBox">
                <div className="interactiveDogBox">
                    <InterActiveDog></InterActiveDog>
                </div>
            </div>
            <h3>Create an account to browse the dog database.</h3>
            <p>This client was built with JavaScript & React and the
                API was built with Java Spring Boot. PostgreSQL was used
                for the database.</p>
            <p>Backend repository: https://github.com/sardnas/springboot-dog-app</p>
            <p>Frontend repository: https://github.com/sardnas/springboot-dog-app-frontend</p>
            <p>Everything was done by Sandra Reinecke, IT-consultant trainee at Consid. </p>
        </>
    );
};

export default Hello;