import React from "react";

import { User } from "lucide-react";

const UserMessage = ({ message }) => {
    return (
        <div className="user-container">
            <User className="icon-user icon"/>
            <p className="user-message">{ message }</p>
        </div>
    );
};

export default UserMessage;