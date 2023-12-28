import React, { useState } from "react";

import { ThemeProvider } from "../components/ThemeContext";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

import "./Home.css";

const Home = () => {
   const [messages, setMessages] = useState([]);

   const addMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
   };

   return (
      <ThemeProvider>
         <div className="container">
            <Header />
            <div>
               <Main messages={messages} />
               <Footer addMessage={addMessage} />
            </div>
         </div>
      </ThemeProvider>
   );
};

export default Home;