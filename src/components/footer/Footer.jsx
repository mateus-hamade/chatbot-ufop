import React, { useState } from "react";

import { useTheme } from "../ThemeContext";
import { ArrowUp } from "lucide-react";

import "./Footer.css";

const Footer = ({ addUserMessage }) => {
   const { isDarkMode } = useTheme();
   const [inputValue, setInputValue] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (inputValue.trim() !== "") {
         addUserMessage(inputValue);
         setInputValue(""); 
      }
   };

   const handleChange = (e) => {
      setInputValue(e.target.value);
   }

   return (
      <footer className={isDarkMode ? "dark-theme" : "light-theme"}>
         <form action="" id="form" autoComplete="off" onSubmit={handleSubmit}>
            <input 
               id="input-chat"
               value={inputValue}
               onChange={handleChange}
            />
            <button id="send-button" onClick={handleSubmit} type="submit"><ArrowUp /></button>
         </form>
      </footer>
   );
};

export default Footer;