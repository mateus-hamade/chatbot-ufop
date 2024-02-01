import React from "react";

import UserMessage from "./UserMessage";
import BotMessage  from "./BotMessage";

import { downloadMessages } from "../utils/useDownloadText";

import { Share, X } from "lucide-react";

import "../styles/shareConversation.css";

const ShareConversation= ({ messages, modal, changeModal }) => {
    return (
        <div className={ modal ? "share-container" : "share-container-hidden" } >
            <div className="share-modal">
                <div className="title-modal">
                    <h2>Compartilhar conversa</h2>
                    <button className="close-button" onClick={ changeModal }>
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
                                <UserMessage key={ index } message={ message.content } />
                            ) : (
                                <BotMessage key={ index } message={ message.content } />
                            )
                        )
                    )}
                </div>
                <div className="share-messages">
                    <button className="share-button" onClick={() => downloadMessages(messages)}>
                        <p>Compartilhar</p>
                        <Share width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareConversation;