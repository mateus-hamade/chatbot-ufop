import React from "react";

import "./Suggestion.css";

const Suggestion = ({ title, link }) => {
    return (
        <div className = "suggestion">
            <h1 className = "suggestion-title">{ title }</h1>
            <p className = "suggestion-paragraph">{ link }</p>
        </div>
    )
}

export default Suggestion;