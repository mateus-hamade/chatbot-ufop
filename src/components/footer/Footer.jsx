import "./Footer.css";

import React from "react";
import { useTheme } from "../ThemeContext";

import { ArrowUp } from "lucide-react";

const Footer = () => {
   const { isDarkMode } = useTheme();

   return (
      <footer className={isDarkMode ? "dark-theme" : "light-theme"}>
         <form action="">
            <input />
            <button id="send-button" type="submit"><ArrowUp /></button>
         </form>
      </footer>
   );
};

export default Footer;