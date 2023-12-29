import React from "react";

import "../styles/Suggestion.css";

const Suggestion = ({ title, link }) => {
    return (
        <div className="suggestion">
            <h1 className="suggestion-title">{ title }</h1>
            <p class="suggestion-paragraph">{ link }</p>
        </div>
    )
}

export default Suggestion;