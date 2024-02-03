import React from "react";

import { Share, Eraser } from "lucide-react";

import "./menu.css";

const Menu = ({setMessages, changeModal}) => {
    const clearMessages = () => {
        setMessages([]);
    }

    return (
        <div className = "container-config">
            <div className = "container-config-title">
               <p>Pergunte ao chatbot da UFOP 🤔</p>
            </div>
            <div className = "container-config-buttons">
               <button className = "button-config" onClick = { clearMessages }>
                  <Eraser width = { 16 } height = { 16 }/>
               </button>
               <button className="button-config" onClick = { changeModal }>
                  <Share width = { 16 } height = { 16 }/>
               </button>
            </div>
         </div>
    );
}

export default Menu;