import { ThemeProvider } from "../components/ThemeContext";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

import React, { useState } from "react";

import "./Home.css";

const Home = () => {
   const [userMessages, setUserMessages] = useState([]);

   const addUserMessage = (message) => {
      setUserMessages((prevMessages) => [...prevMessages, message]);
   };

   return (
      <ThemeProvider>
         <div className="container">
            <Header />
            <div>
               <Main userMessages={userMessages} />
               <Footer addUserMessage={addUserMessage} />
            </div>
         </div>
      </ThemeProvider>
   );
};

export default Home;