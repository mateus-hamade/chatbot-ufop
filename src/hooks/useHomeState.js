import { useState } from 'react';

export const useHomeState = () => {
    const [messages, setMessages] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const addMessage = message => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    return { messages, setMessages, isMenuOpen, setIsMenuOpen, addMessage };
};

export default useHomeState;