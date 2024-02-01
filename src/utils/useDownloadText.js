export const downloadMessages = (messages) => {
    const messagesString = messages.map(message => 
        `${message.type === "user" ? "Usuário: " : "Bot: "}${message.content}`
    ).join("\n");

    const blob = new Blob([messagesString], { type: "text/plain;charset=utf-8" });
    
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href     = href;
    link.download = "Conversa-ChatbotUFOP.txt";
    
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
};