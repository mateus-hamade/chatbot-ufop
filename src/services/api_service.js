import axios from "axios";

const sendMessage = async (message) => {
    try {
        const response = await axios.post("http://localhost:3001/chat", { message });
        return response.data.message;
        
    } catch (error) {
        return error.response.data.message;
    }
}

export { sendMessage };