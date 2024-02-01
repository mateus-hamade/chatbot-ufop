import React from "react";

import useAnimatedText from "../utils/useAnimatedText";

import { Bot } from "lucide-react";

import "../styles/bot.css"

const BotMessage = ({ message }) => {
    const displayedMessage = useAnimatedText(message);

    return (
        <div className="bot-container">
            <Bot className="icon-bot icon" />
            <p className="bot-message">{displayedMessage}</p>
        </div>
    );
};

export default BotMessage;