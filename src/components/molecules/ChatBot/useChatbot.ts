import { useEffect, useRef, useState } from "react";

const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

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

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, { text: inputValue, sender: "user" }]);
      setInputValue("");
      setTimeout(() => {
        const robotResponse = generateRobotResponse(inputValue);
        setMessages((prev) => [
          ...prev,
          { text: robotResponse, sender: "robot" },
        ]);
      }, 500);
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
  };
};

export default useChatbot;
