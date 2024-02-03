import React from "react";

import { Bot } from "lucide-react";

import "./botStatus.css";

const BotStatus = () => {
    return (
        <div className = "container-status">
            <Bot className = "icon" />
            <div className = "container-detail">
                <p className = "bot-name">Assistente Ufopianx</p>
                <p className = "status">Online</p>
            </div>
        </div>
    );
};

export default BotStatus;
