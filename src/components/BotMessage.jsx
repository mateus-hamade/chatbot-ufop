import React from "react";

import { Bot } from "lucide-react";

const BotMessage = ({ message }) => {
    return (
        <div className="bot-container">
            <Bot className="icon"/>
            <p className="bot-message">{ message }</p>
         </div>
    );
};

export default BotMessage;