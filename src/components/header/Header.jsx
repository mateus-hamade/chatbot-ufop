import "./Header.css";

import React, { useState } from "react";
import { Bot, Moon, Sun, ChevronsLeft, MoreHorizontal } from "lucide-react";

const Header = () => {
   return (
      <header>
         <Bot className="icon" />
         <div className="detail">
            <p className="bot-name">Assistente Ufopianx</p>
            <p className="status">Online</p>
         </div>
         <button className="theme">
            <Sun />
         </button>
         <div className="history-container">
            <h1>Histórico de conversas</h1>
            <div className="history-listener">
               <div className="history-detail">
                  <h2>Cardápio R.U hoje</h2>
                  <MoreHorizontal className="horizontal-detail" />
               </div>
               <div className="history-detail">
                  <h2>Calendário acadêmico 2023/2</h2>
                  <MoreHorizontal className="horizontal-detail" />
               </div>
               <div className="history-detail">
                  <h2>Horário de aula 2023/2</h2>
                  <MoreHorizontal className="horizontal-detail" />
               </div>
               <div className="history-detail">
                  <h2>Cardápio R.U amanhã</h2>
                  <MoreHorizontal className="horizontal-detail" />
               </div>
               <div className="history-detail">
                  <h2>Disciplinas eletivas ofertadas... </h2>
                  <MoreHorizontal className="horizontal-detail" />
               </div>
            </div>
            
         </div>
         <button className="new-conversation">Nova conversa</button>
      </header>
   );
};

export default Header;