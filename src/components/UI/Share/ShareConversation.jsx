import React from "react";

import { downloadMessages } from "../../../utils/useDownloadText";

import Message from "../Message/Message";

import { Share, X, User, Bot } from "lucide-react";

import "./shareConversation.css";

const ShareConversation = ({ messages, modal, changeModal }) => {
    return (
        <div className = { modal ? "share-container" : "share-container-hidden" } >
            <div className = "share-modal">
                <div className = "title-modal">
                    <h2>Compartilhar conversa</h2>
                    <button className = "close-button" onClick={ changeModal }>
                        <X />
                    </button>
                </div>
                <div className = "share-div">
                    {messages.length === 0 ? (
                            <div className = "share-div-empty">
                                <p>Não existem mensagens para serem compartilhadas 😉</p>
                            </div>
                        ) : (
                            messages.map((message, index) =>
                            message.type === "user" ? (
                                <Message 
                                    key          = { index } 
                                    message      = { message.content }
                                    container    = { "user-container" }
                                    Icon         = { User }
                                    type_icon    = { "icon-user icon" }
                                    type_message = { "user-message" } 
                                    animated     = { false }                               
                                />
                            ) : (
                                <Message 
                                    key          = { index } 
                                    message      = { message.content }
                                    container    = { "bot-container" }
                                    Icon         = { Bot }
                                    type_icon    = { "icon-bot icon" }
                                    type_message = { "bot-message" }
                                    animated     = { true }
                                />
                            )
                        )
                    )}
                </div>
                <div className = "share-messages">
                    <button className = "share-button" onClick={() => downloadMessages(messages)}>
                        <p>Compartilhar</p>
                        <Share width = { 16 } height = { 16 } />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareConversation;