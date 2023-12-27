import React, { useState } from "react";

import { useTheme } from "../ThemeContext";
import UserMessage from "../UserMessage";

import "./Main.css";

const Main = ({ userMessages }) => {
   const { isDarkMode } = useTheme();

   return (
      <main className={isDarkMode ? "dark-theme-707A81" : "light-theme"}>
         {userMessages.map((message, index) => (
            <UserMessage key={index} message={message} />
         ))}
      </main>
   );
};

export default Main;