import React, { useState, ReactElement } from "react";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";
import { useAuth } from "../../../context/AuthContext";
import { FlexContainer } from "../../core/styled";
import { themes } from "../../core/theme/theme";
import tokens from "../../core/theme/tokens";

interface NavigationBarProps {
  onMenuClick: (key: string) => void;
  children: React.ReactNode;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  onClick: () => void;
  isOpen?: boolean;
  onMenuClick?: (key: string) => void;
}

interface LogoutButtonProps {
  onClick: () => void;
  isOpen?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> & {
  Item: React.FC<NavItemProps>;
  LogoutButton: React.FC<LogoutButtonProps>;
} = ({ onMenuClick, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.NavContainer isMenuOpen={isMenuOpen}>
      <S.NavHeader>
        <S.HamburgerIcon onClick={toggleMenu}>
          <MenuOutlined style={{ color: themes.light.text, fontSize: 24 }} />
        </S.HamburgerIcon>
      </S.NavHeader>
      {React.Children.map(children, (child) =>
        React.isValidElement<NavItemProps>(child)
          ? React.cloneElement(child, {
              isOpen: isMenuOpen,
              onMenuClick,
            } as Partial<NavItemProps>)
          : child
      )}
    </S.NavContainer>
  );
};

const Item: React.FC<NavItemProps> = ({
  icon,
  text,
  path,
  onClick,
  isOpen = false,
  onMenuClick,
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleClick = () => {
    onClick();
    if (onMenuClick) {
      onMenuClick(path);
    }
  };

  return (
    <FlexContainer>
      <S.NavItem isOpen={isOpen} isActive={isActive} onClick={handleClick}>
        <div>{icon}</div>
        {isOpen && <span className="navItemText">{text}</span>}
      </S.NavItem>
    </FlexContainer>
  );
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ isOpen = false }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <S.LogoutButton isOpen={isOpen} onClick={handleLogout}>
      <span>
        <LogoutOutlined style={{ marginRight: tokens.margin.BASELINE }} />
      </span>
      {isOpen && <span className="navItemText">Logout</span>}
    </S.LogoutButton>
  );
};

NavigationBar.Item = Item;
NavigationBar.LogoutButton = LogoutButton;

export default NavigationBar;
