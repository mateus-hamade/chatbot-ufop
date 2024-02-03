import React from "react";

import { useTheme } from "../../ThemeContext";

import BotStatus   from "../../UI/BotStatus/BotStatus";
import Information from "../../UI/Information/Information";
import Contact     from "../../UI/Contact/Contact";

import { Moon, Sun } from "lucide-react";

import "./header.css";

const Header = ({isMenuOpen}) => {
   const { isDarkMode, toggleTheme } = useTheme();

   return (
      <header className = { `${ isDarkMode ? "dark-theme" : "light-theme" } ${ isMenuOpen ? "menu-closed" : "menu-open" }` }>
         <BotStatus />
         <button className = "theme" onClick = { toggleTheme }>
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