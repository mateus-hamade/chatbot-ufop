import React, { useState } from "react";

import { ThemeProvider } from "../components/ThemeContext";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/darkTheme.css";

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
