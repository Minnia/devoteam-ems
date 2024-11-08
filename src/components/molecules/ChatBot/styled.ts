import styled from "styled-components";
import { themes } from "../../core/theme/theme";
import tokens from "../../core/theme/tokens";

export const ChatBotPopupContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: ${tokens.margin.BASELINE}px;
  right: ${tokens.margin.BASELINE * 1.5}px;
  width: ${({ $isOpen }) => ($isOpen ? "20rem" : `${tokens.chatBot.large}rem`)};
  height: ${({ $isOpen }) =>
    $isOpen ? "25rem" : `${tokens.chatBot.large}rem`};
  background-color: ${themes.light.accent};
  color: ${themes.light.black};
  border-radius: ${({ $isOpen }) => ($isOpen ? "5%" : "50%")};
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $isOpen }) => ($isOpen ? "flex-end" : "center")};

  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: ${({ $isOpen }) =>
      $isOpen ? "15rem" : `${tokens.chatBot.small}rem`};
    height: ${({ $isOpen }) =>
      $isOpen ? "20rem" : `${tokens.chatBot.small}rem`};
  }
`;

export const ChatHeader = styled.div<{ $isOpen: boolean }>`
  color: ${themes.light.text};
  display: flex;
  flex-direction: row;
  height: 2rem;
  padding: ${({ $isOpen }) => ($isOpen ? tokens.padding.BASELINE : "0")}px;
  padding-top: ${({ $isOpen }) =>
    $isOpen ? tokens.padding.BASELINE * 1.5 : "0"}px;
  cursor: pointer;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${tokens.padding.BASELINE}px;
  background-color: ${themes.light.backgroundLight};
  color: ${themes.light.textDark};
  overflow: hidden;
`;

export const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: ${tokens.padding.BASELINE * 2}px;
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
`;

export const MessageInput = styled.input`
  width: 90%;
  padding: ${tokens.padding.BASELINE * 1.5}px;
  border: 1px solid ${themes.light.borderColor};
  border-radius: ${tokens.borderRadius.BASELINE * 0.7}px;
  outline: none;
  margin-top: ${tokens.margin.BASELINE * 1.5}px;

  &:focus {
    border-color: ${themes.light.accent};
  }
`;

export const ChatMessage = styled.p<{ fontWeight?: boolean }>`
  font-weight: ${({ fontWeight }) => (fontWeight ? "bold" : "normal")};
`;

export const StyledSpan = styled.span`
  margin: ${tokens.margin.BASELINE * 0.5}px;
`;
