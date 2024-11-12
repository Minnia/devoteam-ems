import React from "react";
import * as S from "./styled";
import { Typography } from "../../../core/theme/typography";
import { CardContainer } from "../../../core/styled";
import tokens from "../../../core/theme/tokens";

interface CardProps {
  title: string;
  text?: string | number;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  numberOfLines?: number;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const InformationCard: React.FC<CardProps> = ({
  title,
  text,
  style,
  footer,
  children,
  numberOfLines,
  icon,
  onClick,
}) => {
  const maxFooterLength = 55;

  const splitFooterText = (footerText: string) => {
    if (footerText.length > maxFooterLength) {
      const firstPart = footerText.slice(0, maxFooterLength);
      const secondPart = footerText.slice(maxFooterLength);
      return (
        <>
          {firstPart}
          <br />
          {secondPart}
        </>
      );
    }
    return footerText;
  };

  return (
    <CardContainer onClick={onClick} style={style} $minWidth={400}>
      <S.Content
        $paddingX={tokens.padding.BASELINE * 2}
        $paddingY={tokens.padding.BASELINE}
        $minWidth={220}
      >
        <Typography.Heading3>{title}</Typography.Heading3>
        {text && <Typography.BodyMedium bold>{text}</Typography.BodyMedium>}
        {icon && <S.StyledIcon icon={icon}>{icon}</S.StyledIcon>}
        {children}
      </S.Content>
      {footer && (
        <S.Footer>
          {typeof footer === "string" ? splitFooterText(footer) : footer}
        </S.Footer>
      )}
    </CardContainer>
  );
};

export default InformationCard;
