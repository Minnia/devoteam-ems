import styled, { css } from "styled-components";
import { themes } from "../../core/theme/theme";
import tokens from "../../core/theme/tokens";
import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";

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

export const MessageInput = styled(Input)`
  flex: 1;
  padding: ${tokens.padding.BASELINE}px;
  border: 1px solid ${themes.light.borderColor};
  border-radius: ${tokens.borderRadius.BASELINE}px;
  outline: none;
  margin-right: ${tokens.margin.BASELINE * 0.5}px;
  height: 2rem;
  &:focus {
    border-color: ${themes.light.accent};
  }
`;

export const StyledSpan = styled.span`
  margin: ${tokens.margin.BASELINE * 0.5}px;
`;

export const ChatMessage = styled.div<{
  isUser: boolean;
  fontWeight?: boolean;
}>`
  font-weight: ${({ fontWeight }) => (fontWeight ? "bold" : "normal")};
  background: ${({ isUser }) =>
    isUser ? themes.light.accent : themes.light.inactive};
  color: ${({ isUser }) =>
    isUser ? themes.light.backgroundLight : themes.light.textDark};
  padding: ${tokens.padding.BASELINE}px;
  border-radius: ${tokens.borderRadius.BASELINE * 2}px;
  max-width: 75%;
  font-size: ${tokens.text.fontSize.SMALL}px;

  ${({ isUser }) =>
    isUser
      ? css`
          border-bottom-right-radius: 0;
        `
      : css`
          border-bottom-left-radius: 0;
        `}
`;

export const MessageContainer = styled.div<{ isUser: boolean }>`
  display: flex;

  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  width: 100%;
  padding-top: ${tokens.padding.BASELINE}px;
  padding-bottom: ${tokens.padding.BASELINE}px;
  background-color: ${themes.light.inactive};
`;

export const SendButton = styled(SendOutlined)`
  background-color: ${themes.light.accent};
  color: ${themes.light.backgroundLight};
  border-radius: ${tokens.borderRadius.BASELINE}px;
  padding: ${tokens.padding.BASELINE}px;
  cursor: pointer;
  height: inherit;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${themes.light.redHover};
  }
`;
