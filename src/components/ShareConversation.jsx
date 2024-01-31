import React from "react";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

import "../styles/shareConversation.css";

import { Share, X } from "lucide-react";

const ShareConversation= ({ messages, modal, changeModal }) => {
    const downloadMessages = () => {
        const messagesString = messages.map(message => 
            `${message.type === "user" ? "Usuário: " : "Bot: "}${message.content}`
        ).join("\n");

        const blob = new Blob([messagesString], { type: "text/plain;charset=utf-8" });
        
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = "Conversa-ChatbotUFOP.txt";
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    };

    return (
        <div className={modal ? "share-container" : "share-container-hidden"} >
            <div className="share-modal">
                <div className="title-modal">
                    <h2>Compartilhar conversa</h2>
                    <button className="close-button" onClick={changeModal}>
                        <X />
                    </button>
                </div>

                <div className="share-div">
                    {messages.length === 0 ? (
                        <div className="share-div-empty">
                            <p>Não existem mensagens para serem compartilhadas 😉</p>
                        </div>
                        ) : (
                        messages.map((message, index) =>
                            message.type === "user" ? (
                                <UserMessage key={index} message={message.content} />
                            ) : (
                                <BotMessage key={index} message={message.content} />
                            )
                        )
                    )}
                </div>

                <div className="share-messages">
                    <button className="share-button" onClick={downloadMessages}>
                        <p>Compartilhar</p>
                        <Share width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareConversation;