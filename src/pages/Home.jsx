import React, { useState } from "react";

import { ThemeProvider } from "../components/ThemeContext";

import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Body/Main";
import Footer from "../components/Layouts/Footer/Footer";

import "../styles/home.css";
import "../styles/darkTheme.css";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ThemeProvider>
      <div className="container">
        <Header isMenuOpen={isMenuOpen} />
        <div className={`${isMenuOpen ? "sub-container" : ""}`}>
          <Main messages={messages} setMessages={setMessages} />
          <Footer
            addMessage={addMessage}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
