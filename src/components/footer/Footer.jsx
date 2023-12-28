import React, { useState } from "react";

import { useTheme } from "../ThemeContext";
import { sendMessage } from "../../services/api_service";

import { ArrowUp, Loader2 } from "lucide-react";

import "./Footer.css";

const Footer = ({ addMessage }) => {
   const { isDarkMode } = useTheme();
   const [inputValue, setInputValue] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (inputValue.trim() !== "" && !isLoading) {
         const userMessage = inputValue;

         addMessage({ type: "user", content: userMessage });
         setInputValue("");
         setIsLoading(true);

         try {
            const botResponse = await sendMessage(userMessage);
            addMessage({ type: "bot", content: botResponse });
         } catch (error) {
            console.log(error);
         } finally {
            setIsLoading(false);
         }
      }
   };

   const handleChange = (e) => {
      setInputValue(e.target.value);
   };

   return (
      <footer className={isDarkMode ? "dark-theme" : "light-theme"}>
         <form action="" id="form" autoComplete="off" onSubmit={handleSubmit}>
            <input id="input-chat" value={inputValue} onChange={handleChange} />
            <button id="send-button" type="submit" disabled={isLoading}>
               {isLoading ? <Loader2 className="loading" /> : <ArrowUp className="sending" />}
            </button>
         </form>
      </footer>
   );
};

export default Footer;