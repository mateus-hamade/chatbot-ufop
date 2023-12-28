import React from "react";

import { useTheme } from "../ThemeContext";

import UserMessage from "../UserMessage";
import BotMessage from "../BotMessage";

import "./Main.css";

const Main = ({ messages }) => {
   const { isDarkMode } = useTheme();

   return (
      <main className={isDarkMode ? "dark-theme-707A81" : "light-theme"}>
         {messages.length === 0 ? (
            <div className="empty-main-message">
               Olá! 👋 Eu sou o assistente da UFOP, uma inteligência artificial pronta para ajudar. Qual é a sua pergunta do dia?
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
      </main>
   );
};

export default Main;