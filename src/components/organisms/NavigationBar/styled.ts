import styled from "styled-components";
import { themes } from "../../core/theme/theme";
import tokens from "../../core/theme/tokens";

export const NavContainer = styled.div<{ isMenuOpen: boolean }>`
  height: 100%;
  width: 150px;
  position: fixed;
  overflow-y: auto;
  background-color: ${themes.light.accent};
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 1000;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: ${({ isMenuOpen }) => (isMenuOpen ? "150px" : "60px")};
  }
`;

export const NavHeader = styled.div`
  padding: ${tokens.padding.BASELINE * 2}px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: ${tokens.text.fontSize}px;
  cursor: pointer;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    display: block;
  }
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  transition: max-height 0.3s ease-in-out;

  overflow: hidden;
  @media (min-width: ${tokens.breakpoints.tablet}) {
    max-height: none;
  }
`;

export const NavItem = styled.div<{
  isActive?: boolean;
  isOpen?: boolean;
  spacing?: number;
}>`
  padding: ${tokens.padding.BASELINE}px;
  display: flex;
  color: ${themes.light.text};
  align-items: center;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s, padding 0.2s;
  background-color: ${({ isActive }) =>
    isActive ? themes.light.activeNavItem : themes.light.transparent};

  svg {
    margin-right: ${({ spacing }) =>
      spacing !== undefined ? `${spacing}px` : `${tokens.margin.BASELINE}px`};
  }

  span.navItemText {
    margin-left: ${({ spacing }) =>
      spacing !== undefined ? `${spacing}px` : `${tokens.margin.BASELINE}px`};
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    justify-content: center;
    span {
      display: block;
    }
    span.navItemText {
      display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    }
  }
`;

export const LogoutButton = styled(NavItem)`
  margin-top: auto;
  border: none;
`;
