import React from "react";

import { Utensils, Calendar, BookText, MessageCircleQuestionIcon, ClipboardList} from "lucide-react";

import "./information.css";

const Information = () => {
    const icons = [<Calendar />, <Utensils />, <BookText />, <ClipboardList />];
    
    const informations = [
        "Canderário acadêmico",
        "Cardápio do RU",
        "Horário de Aulas",
        "Matrículas e Cancelamento",
    ];
    
    const links = [
        "https://www.prograd.ufop.br/calendario-academico",
        "https://ufop.br/cardapio-do-ru",
        "https://zeppelin10.ufop.br/HorarioAulas/",
        "https://www.prograd.ufop.br/calendario-academico",
    ];

    return (
        <div className = "information-container">
            <div className = "information-header">
                <h1 className = "information-title">Informações institucionais</h1>
                <MessageCircleQuestionIcon className = "information-icon" />
            </div>
            <div className = "information-schedule">
                {informations.map((information, index) => {
                    return (
                        <a
                            key       = { index }
                            href      = { links[index] }
                            target    = "_blank"
                            rel       = "noreferrer"
                            className = "information-detail"
                        >
                            <p>{ information }</p>
                            { icons[index] }
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Information;