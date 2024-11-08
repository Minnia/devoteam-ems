import React from "react";
import * as S from "./styled";
import { Typography } from "../../core/theme/typography";
import { CardContainer } from "../../core/styled";

interface CardProps {
  title: string;
  text?: string | number;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  numberOfLines?: number;
}

const InformationCard: React.FC<CardProps> = ({
  title,
  text,
  style,
  footer,
  children,
  numberOfLines,
}) => {
  const maxFooterLength = 54;

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

  const textStyle = numberOfLines
    ? {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical" as const,
        overflow: "hidden",
        WebkitLineClamp: numberOfLines,
      }
    : {};

  return (
    <CardContainer style={style}>
      <S.Content>
        <Typography.Heading3>{title}</Typography.Heading3>
        {text && (
          <Typography.BodyMedium bold style={textStyle}>
            {text}
          </Typography.BodyMedium>
        )}
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
