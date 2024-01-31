import React, {useState} from "react";

import { useTheme } from "./ThemeContext";
import { Share, Eraser } from "lucide-react";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import Suggestion from "./Suggestion";

import "../styles/main.css";
import "../styles/bot.css"
import "../styles/user.css"

const Main = ({ messages, setMessages }) => {
   const { isDarkMode } = useTheme();

   const clearMessages = () => {
      setMessages([]);
   }

   return (
      <main className={isDarkMode ? "dark-theme-707A81" : "light-theme"}>
         <div className="container-config">
            <div className="container-config-title">
               <p>Pergunte ao chatbot da UFOP 🤔</p>
            </div>
            <div className="container-config-buttons">
               <button className="button-config" onClick={clearMessages}>
                  <Eraser width={16} height={16}/>
               </button>
               <button className="button-config">
                  <Share width={16} height={16}/>
               </button>
            </div>
         </div>
         <div className="container-main">
            {messages.length === 0 ? (
               <div className="empty-main-message">
                  <p className="empty-main-paragraph">
                     Olá! 👋 Eu sou o assistente da UFOP, uma inteligência artificial pronta para ajudar. Qual é a sua pergunta do dia?
                  </p>

                  <div className="suggestion-container">
                     <p>sugestões de perguntas</p>
                     <Suggestion title="Cursos ofertados" link="Quais os cursos ofertados pela ufop?" />
                     <Suggestion title="Cardapio do RU" link="Qual o cardápio do RU hoje?" />
                     <Suggestion title="Calendário acadêmico" link="Quais são os feriados neste periodo?" />
                  </div>
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
      </main>
   );
};

export default Main;