import React from "react";

import { User2 } from "lucide-react";

const UserMessage = ({ message }) => {
    return (
        <div className="user-container">
            <User2 className="icon"/>
            <p className="user-message">{ message }</p>
        </div>
    );
};

export default UserMessage;