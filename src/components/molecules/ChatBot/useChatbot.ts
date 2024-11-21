import { useEffect, useRef, useState } from "react";
import { OpenAI } from "openai";

const useChatbot = (apiKey: string) => {
  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  if (!apiKey) {
    console.error("OpenAI API key is missing");
  }

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setMessages([
        { text: "Welcome to Devoteam, how can I help you?", sender: "robot" },
        ...messages,
      ]);
    }
  };

  const sendMessage = async () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = { text: inputValue, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsLoading(true);
      // setTimeout(() => {
      //   const robotResponse = generateRobotResponse(inputValue);
      //   setMessages((prev) => [
      //     ...prev,
      //     { text: robotResponse, sender: "robot" },
      //   ]);
      // }, 500);

      try {
        // Generate AI response using OpenAI
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant for Devoteam. Provide concise, professional responses.",
            },
            { role: "user", content: inputValue },
          ],
          max_completion_tokens: 150,
        });

        const robotResponse =
          completion.choices[0].message.content ||
          "I'm not sure how to respond to that.";

        setMessages((prev) => [
          ...prev,
          { text: robotResponse, sender: "robot" },
        ]);
      } catch (error) {
        console.error("Error generating response:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I'm having trouble responding right now.",
            sender: "robot",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const generateRobotResponse = (userInput: string) => {
    if (userInput.toLowerCase().includes("hello")) {
      return "Hi! How can I assist you today?";
    }
    if (userInput.toLowerCase().includes("fire")) {
      return "I understand! Who would you like to fire?";
    }
    if (userInput.toLowerCase().includes("help")) {
      return "Sure! What do you need help with?";
    }
    if (userInput.toLowerCase().includes("thanks")) {
      return "You're welcome!";
    }
    if (userInput.toLowerCase().includes("contact")) {
      return `You can get in touch with us at devoteam, where you'll find all the information you need.`;
    }
    return `You said: ${userInput}. How can I assist you further?`;
  };

  return {
    generateRobotResponse,
    sendMessage,
    toggleChat,
    isOpen,
    messages,
    inputValue,
    setInputValue,
    chatEndRef,
    isLoading,
  };
};

export default useChatbot;
