import React, { useEffect, useState } from "react";

import { Bot } from "lucide-react";

const BotMessage = ({ message }) => {
    const [displayedMessage, setDisplayedMessage] = useState("");
  
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedMessage((prev) => prev + message[index]);
            index++;
    
            if (index === message.length - 1) {
                clearInterval(intervalId);
            }
        }, 50);
  
        return () => clearInterval(intervalId);
    }, [message]);
  
    return (
        <div className="bot-container">
            <Bot className="icon-bot icon" />
            <p className="bot-message">{displayedMessage}</p>
        </div>
    );
};

export default BotMessage;