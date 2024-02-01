import React from "react";

import { User } from "lucide-react";

import "../styles/user.css"

const UserMessage = ({ message }) => {
    return (
        <div className="user-container">
            <User className="icon-user icon"/>
            <p className="user-message">{ message }</p>
        </div>
    );
};

export default UserMessage;