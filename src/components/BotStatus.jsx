import React from "react";

import { Bot } from "lucide-react";

import "../styles/botStatus.css";

const BotStatus = () => {
    return (
        <div className="status-container">
            <Bot className="icon" />
            <div className="detail-container">
                <p className="bot-name">Assistente Ufopianx</p>
                <p className="status">Online</p>
            </div>
        </div>
    )
}

export default BotStatus;