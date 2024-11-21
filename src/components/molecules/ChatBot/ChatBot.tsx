import "dotenv/config";

import useChatbot from "./useChatbot";
import Logo from "../../atoms/Logo";
import * as S from "./styled";

const ChatBot: React.FC = () => {
  const {
    sendMessage,
    toggleChat,
    isOpen,
    messages,
    inputValue,
    setInputValue,
    chatEndRef,
    isLoading,
  } = useChatbot(process.env.REACT_APP_OPEN_AI_API_KEY as string);

  return (
    <S.ChatBotPopupContainer $isOpen={isOpen}>
      <S.ChatHeader $isOpen={isOpen} onClick={toggleChat}>
        {isOpen ? <S.StyledSpan>X</S.StyledSpan> : <Logo />}
      </S.ChatHeader>

      {isOpen && (
        <>
          <S.ChatContent>
            <S.MessageList>
              {messages.map((msg, idx) => (
                <S.MessageContainer key={idx} $isUser={msg.sender === "user"}>
                  <S.ChatMessage $isUser={msg.sender === "user"}>
                    {msg.text}
                  </S.ChatMessage>
                </S.MessageContainer>
              ))}
              {isLoading && (
                <S.MessageContainer $isUser={false}>
                  <S.ChatMessage $isUser={false}>Typing...</S.ChatMessage>
                </S.MessageContainer>
              )}
              <div ref={chatEndRef} />
            </S.MessageList>
          </S.ChatContent>
          <S.MessageInputContainer>
            <S.MessageInput
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={isLoading}
            />
            <S.SendButton
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
            >
              Send
            </S.SendButton>
          </S.MessageInputContainer>
        </>
      )}
    </S.ChatBotPopupContainer>
  );
};

export default ChatBot;
