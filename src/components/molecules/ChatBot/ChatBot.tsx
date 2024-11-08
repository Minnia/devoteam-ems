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
  } = useChatbot();

  return (
    <>
      <S.ChatBotPopupContainer $isOpen={isOpen}>
        <S.ChatHeader $isOpen={isOpen} onClick={toggleChat}>
          {isOpen ? <S.StyledSpan>X</S.StyledSpan> : <Logo />}
        </S.ChatHeader>

        {isOpen && (
          <S.ChatContent>
            <S.MessageList>
              {messages.map((msg, idx) => (
                <div key={idx}>
                  <S.ChatMessage fontWeight>
                    {msg.sender === "robot" ? "Robot" : "You"}
                  </S.ChatMessage>
                  <S.ChatMessage>{msg.text}</S.ChatMessage>
                </div>
              ))}
              <div ref={chatEndRef} />
            </S.MessageList>
            <S.MessageInput
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
          </S.ChatContent>
        )}
      </S.ChatBotPopupContainer>
    </>
  );
};

export default ChatBot;
