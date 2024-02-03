import React from "react";

import Message      from "../Message/Message";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

import { User, Bot } from "lucide-react";

import styles from "./messageList.module.css";

const MessageList = ({ messages }) => {
    if (messages.length === 0) {
        return <EmptyMessage />;
    }

    return (
        <div className={ styles.container }>
            {messages.map((message, index) =>
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
            )}
        </div>
    );
};

export default MessageList;