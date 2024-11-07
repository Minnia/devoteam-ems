import {
  ChatBotPopupContainer,
  ChatContent,
  MessageInput,
  MessageList,
  ChatHeader,
} from "./styled";
import useChatbot from "./useChatbot";
import * as logo from "../../../assets/index";
import Logo from "../../atoms/Logo";

const ChatBot: React.FC = () => {
  const {
    sendMessage,
    toggleChat,
    isOpen,
    messages,
    inputValue,
    setInputValue,
    chatEndRef,
  } = useChatbot();

  console.log(logo.Logo.src);

  return (
    <>
      <ChatBotPopupContainer $isOpen={isOpen}>
        <ChatHeader $isOpen={isOpen} onClick={toggleChat}>
          {isOpen ? <span>X</span> : <Logo />}
        </ChatHeader>

        {isOpen && (
          <ChatContent>
            <MessageList>
              {messages.map((msg, idx) => (
                <div key={idx}>
                  <p style={{ fontWeight: "bold" }}>
                    {msg.sender === "robot" ? "Robot" : "You"}
                  </p>
                  <p>{msg.text}</p>
                </div>
              ))}
              <div ref={chatEndRef} />
            </MessageList>
            <MessageInput
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
          </ChatContent>
        )}
      </ChatBotPopupContainer>
    </>
  );
};

export default ChatBot;
