import "./Header.css";

import React from "react";
import { useTheme } from "../ThemeContext";

import { Bot, Moon, Sun, ChevronsLeft, MoreHorizontal } from "lucide-react";

const Header = () => {
   const { isDarkMode, toggleTheme } = useTheme();

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

         <div className="history-container">
            <h1>Histórico de conversas</h1>
            <div className="history-listener">
               <div className="history-detail">
                  <h2>Cardápio R.U hoje</h2>
                  <MoreHorizontal className="horizontal-detail" />
               </div>
            </div>
         </div>

         <button className="new-conversation">Nova conversa</button>
      </header>
   );
};

export default Header;