import React, { useState } from "react";

import { useTheme } from "../ThemeContext";
import { sendMessage } from "../../services/api_service";

import { ArrowUp } from "lucide-react";

import "./Footer.css";

const Footer = ({ addMessage }) => {
   const { isDarkMode } = useTheme();
   const [inputValue, setInputValue] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (inputValue.trim() !== "") {
         const userMessage = inputValue;

         addMessage({ type: "user", content: userMessage });

         const botResponse = await sendMessage(userMessage);
         addMessage({ type: "bot", content: botResponse });

         setInputValue("");
      }
   };

   const handleChange = (e) => {
      setInputValue(e.target.value);
   };

   return (
      <footer className={isDarkMode ? "dark-theme" : "light-theme"}>
         <form action="" id="form" autoComplete="off" onSubmit={handleSubmit}>
            <input id="input-chat" value={inputValue} onChange={handleChange} />
            <button id="send-button" onClick={handleSubmit} type="submit">
               <ArrowUp />
            </button>
         </form>
      </footer>
   );
};

export default Footer;