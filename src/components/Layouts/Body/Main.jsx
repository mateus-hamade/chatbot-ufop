import React, { useState } from "react";

import { useTheme } from "../../ThemeContext";

import ShareConversation from "../../UI/Share/ShareConversation";
import MessageList       from "../../UI/MessageList/MessageList";
import Menu              from "../../UI/Menu/Menu";

import "./main.css";

const Main = ({ messages, setMessages }) => {
    const { isDarkMode } = useTheme();
    const [modal, setModal] = useState(false);

    const changeModal = () => {
        setModal(!modal);
    };
    
    return ( 
        <main className = { isDarkMode ? "dark-theme-707A81" : "light-theme"}>
            <ShareConversation
                messages    = { messages }
                modal       = { modal }
                changeModal = { changeModal }
            />
            <Menu 
                changeModal = { changeModal }
            />
            <MessageList messages = { messages } />
        </main>
    );
};

export default Main;