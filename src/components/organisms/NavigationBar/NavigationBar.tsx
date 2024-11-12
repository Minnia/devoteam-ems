import React, { useEffect, useRef } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";
import { useAuth } from "../../../context/AuthContext";
import { FlexContainer, Spacer } from "../../../core/styled";
import tokens from "../../../core/theme/tokens";
import { useTranslation } from "react-i18next";

interface NavigationBarProps {
  onMenuClick: (key: string) => void;
  children: React.ReactNode;
  setNavbarWidth: (width: number) => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  onClick: () => void;
  isOpen?: boolean;
  onMenuClick?: (key: string) => void;
  isActive?: boolean;
}

interface LogoutButtonProps {
  onClick: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> & {
  Item: React.FC<NavItemProps>;
  LogoutButton: React.FC<LogoutButtonProps>;
} = ({ children, setNavbarWidth }) => {
  const ref = useRef<HTMLDivElement>(null);
  const updateWidth = () => {
    if (ref.current) {
      const width = ref.current.getBoundingClientRect().width;
      setNavbarWidth(width);
      return width;
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <>
      <S.NavContainer ref={ref}>
        <S.NavHeader />
        {React.Children.map(children, (child) => child)}
      </S.NavContainer>
      <Spacer width={30} />
    </>
  );
};

const Item: React.FC<NavItemProps> = ({
  icon,
  text,
  path,
  onClick,
  isOpen,
  onMenuClick,
  isActive,
}) => {
  const location = useLocation();
  const isItemActive = location.pathname === path || isActive;

  const handleClick = () => {
    onClick();
    if (onMenuClick) {
      onMenuClick(path);
    }
  };

  return (
    <FlexContainer>
      <S.NavItem
        $isOpen={isOpen}
        $isActive={isItemActive}
        onClick={handleClick}
      >
        {icon}
        <span className="navItemText">{text}</span>
      </S.NavItem>
    </FlexContainer>
  );
};

const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <S.LogoutButton onClick={handleLogout}>
      <LogoutOutlined style={{ marginRight: tokens.margin.BASELINE }} />
      <span className="navItemText">{t("globals.logout")}</span>
    </S.LogoutButton>
  );
};

NavigationBar.Item = Item;
NavigationBar.LogoutButton = LogoutButton;

export default NavigationBar;
