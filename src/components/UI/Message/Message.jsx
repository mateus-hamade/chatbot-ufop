import React from "react";

import useAnimatedText from "../../../utils/useAnimatedText";

import "./message.css";

const Message = ({
        message,
        container,
        Icon,
        type_icon,
        type_message,
        animated,
    }) => {
        
    const displayedMessage = useAnimatedText(message);

    return (
        <div className = { container }>
            {Icon && <Icon className = { type_icon } />}
            <p className = { type_message }>
                { animated ? displayedMessage : message }
            </p>
        </div>
    );
};

export default Message;