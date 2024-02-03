import React from "react";

import Suggestion from "../Suggestion/Suggestion";

import "./emptyMessage.css";

const EmptyMessage = () => {
    const titles = ["Cursos ofertados", "Cardapio do RU", "Calendário acadêmico"]
    const links  = ["Quais os cursos ofertados pela ufop?", "Qual o cardápio do RU hoje?", "Quais são os feriados neste periodo?"]

    return (
        <div className = "empty-main-message">
            <p className = "empty-main-paragraph">
                Olá! 👋 Eu sou o assistente da UFOP, uma inteligência artificial
                pronta para ajudar. Qual é a sua pergunta do dia?
            </p>

            <div className = "suggestion-container">
                <p>sugestões de perguntas</p>
                <div className = "suggestion-list">
                    {titles.map((title, index) => (
                        <Suggestion 
                            key   = { index }
                            title = { title }
                            link  = { links[index] }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EmptyMessage;