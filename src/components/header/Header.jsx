import "./Header.css";

import React from "react";
import { useTheme } from "../ThemeContext";

import { Bot, Moon, Sun, Utensils, Calendar, BookText, MessageCircleQuestionIcon, ClipboardList } from "lucide-react";

const Header = () => {
   const { isDarkMode, toggleTheme } = useTheme();

   const informations = ['Canderário acadêmico', 'Cardápio do RU', 'Horário de Aulas', 'Matrículas e Cancelamento']
   const icons = [<Calendar />, <Utensils />, <BookText />, <ClipboardList />]
   const links = ['https://www.prograd.ufop.br/calendario-academico', 'https://ufop.br/cardapio-do-ru', 'https://zeppelin10.ufop.br/HorarioAulas/', 'https://www.prograd.ufop.br/calendario-academico']

   return (
      <header className={isDarkMode ? "dark-theme" : "light-theme"}>
         <Bot className="icon"/>
         
         <div className="detail">
            <p className="bot-name">Assistente Ufopianx</p>
            <p className="status">Online</p>
         </div>
         
         <button className="theme">
            {isDarkMode ? <Sun onClick={toggleTheme} /> : <Moon onClick={toggleTheme} />}
         </button>

         <div className="information-container">
            <div className="information-title">
               <h1>Informações institucionais</h1>
               <MessageCircleQuestionIcon className="information-title-icon"/>
            </div>
            <div className="information-listener">
               { informations.map((information, index) => {
                  return (
                     <a href={links[index]} target="_blank" rel="noreferrer" className="information-detail">
                        <p>{information}</p>
                        {icons[index]}
                     </a>
                  )
               })}
            </div>
         </div>
      </header>
   );
};

export default Header;