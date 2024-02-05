import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: "sk-<YOUR_API>",
});

const openai = new OpenAIApi(config);

const sendMessage = async (message) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temperature: 0.7,
            messages: [{ role: "user", content: message }],
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        return error;
    }
};

export { sendMessage };
