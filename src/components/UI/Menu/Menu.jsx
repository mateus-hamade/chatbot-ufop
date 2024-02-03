import React from "react";

import { Share, MessageCirclePlus, History } from "lucide-react";

import "./menu.css";

const Menu = ({ changeModal }) => {
   return (
      <div className = "container-config">
         <div className = "container-config-title">
            <p>Pergunte ao chatbot da UFOP 🤔</p>
         </div>
         <div className = "container-config-buttons">
            <button className = "button-config">
               <MessageCirclePlus width = { 16 } height = { 16 }/>
            </button>
            <button className = "button-config">
               <History width = { 16 } height = { 16 }/>
            </button>
            <button className="button-config share-config" onClick = { changeModal }>
               <Share width = { 16 } height = { 16 }/>
            </button>
         </div>
      </div>
   );
}

export default Menu;