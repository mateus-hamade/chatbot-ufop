import React, { useState } from "react";

import { useTheme } from "./ThemeContext";

import { ArrowUp, Loader2, PanelRightClose, PanelLeftClose } from "lucide-react";

import "../styles/footer.css";

const Footer = ({ addMessage, isMenuOpen, setIsMenuOpen }) => {
    const { isDarkMode }                = useTheme();
    const [ inputValue, setInputValue ] = useState("");
    const [ isLoading, setIsLoading ]   = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputValue.trim() !== "" && !isLoading) {
            const userMessage = inputValue;

            addMessage({ type: "user", content: userMessage });
            setInputValue("");
            setIsLoading(true);

            try {
                const botResponse = await sendMessage(userMessage);
                addMessage({ type: "bot", content: botResponse });
            } catch (error) {
                addMessage({ type: "bot", content: "Desculpe, no momento nossos servidores estão indisponíveis. Tente novamente mais tarde!" });
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <footer className={ isDarkMode ? "dark-theme" : "light-theme" }>
            <form action="" id="form" autoComplete="off" onSubmit={ handleSubmit }>
                <input id="input-chat" type="text" value={ inputValue } onChange={ handleChange } placeholder="Digite sua mensagem" autoComplete="off" />
                <button id="send-button" type="submit" disabled={ isLoading }>
                    {isLoading ? (
                        <Loader2 className="loading" />
                    ) : (
                        <ArrowUp className="sending" />
                    )}
                </button>
            </form>
            <button className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                { isMenuOpen ? (
                        <PanelRightClose className="menu-icon" />
                    ) : (
                        <PanelLeftClose className="menu-icon"/>
                )}                       
            </button>
        </footer>
    );
};

export default Footer;
