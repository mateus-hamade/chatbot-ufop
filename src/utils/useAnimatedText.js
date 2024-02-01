import { useState, useEffect } from 'react';

const useAnimatedText = (message, speed = 50) => {
    const [displayedMessage, setDisplayedMessage] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedMessage((prev) => prev + message[index]);
            index++;
      
            if (index >= message.length - 1) {
                clearInterval(intervalId);
            }
        }, speed);
    
        return () => clearInterval(intervalId);
    }, [message, speed]);
  
    return displayedMessage;
};

export default useAnimatedText;