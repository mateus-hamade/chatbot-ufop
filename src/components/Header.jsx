import React from "react";

import { useTheme } from "./ThemeContext";
import BotStatus from "./BotStatus";
import Information from "./Information";

import { Moon, Sun } from "lucide-react";

import "../styles/header.css";
import "../styles/bot.css";
import "../styles/user.css";

const Header = () => {
   const { isDarkMode, toggleTheme } = useTheme();

   return (
      <header className={isDarkMode ? "dark-theme" : "light-theme"}>
         <BotStatus />
         <button className="theme">
            {isDarkMode ? (
               <Sun onClick={toggleTheme} />
            ) : (
               <Moon onClick={toggleTheme} />
            )}
         </button>

         <Information />
      </header>
   );
};

export default Header;
