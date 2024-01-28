import React from "react";

import { useTheme } from "./ThemeContext";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import Suggestion from "./Suggestion";

import "../styles/main.css";
import "../styles/bot.css"
import "../styles/user.css"

const Main = ({ messages }) => {
   const { isDarkMode } = useTheme();

   return (
      <main className={isDarkMode ? "dark-theme-707A81" : "light-theme"}>
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
      </main>
   );
};

export default Main;