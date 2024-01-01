import React from "react";

import { useTheme } from "./ThemeContext";
import BotStatus from "./BotStatus";
import Information from "./Information";
import Contact from "./Contact";

import { Moon, Sun } from "lucide-react";

import "../styles/header.css";
import "../styles/bot.css";
import "../styles/user.css";

const Header = ({isMenuOpen}) => {
   const { isDarkMode, toggleTheme } = useTheme();

   return (
      <header className={`${isDarkMode ? "dark-theme" : "light-theme"} ${isMenuOpen ? "menu-closed" : "menu-open"}`}>
         <BotStatus />
         <button className="theme" onClick={toggleTheme}>
            {isDarkMode ? (
               <Sun />
            ) : (
               <Moon />
            )}
         </button>

         <Information />
         <Contact />
      </header>
   );
};

export default Header;
