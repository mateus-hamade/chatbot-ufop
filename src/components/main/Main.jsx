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
               <p>
                  Olá! 👋 Eu sou o assistente da UFOP, uma inteligência artificial pronta para ajudar. Qual é a sua pergunta do dia?
               </p>

               <div className="empty-suggestion-container">
                  <div className="empty-suggestion">
                     <h1>Cursos ofertados</h1>
                     <p>quais os cursos ofertados pela ufop?</p>
                  </div>
                  <div className="empty-suggestion">
                     <h1>Cardapio do RU</h1>
                     <p>qual o cardápio do RU hoje?</p>
                  </div>
                  <div className="empty-suggestion">
                     <h1>Calendário acadêmico</h1>
                     <p>quais são os feriados neste periodo?</p>
                  </div>
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