import React from "react";
import * as S from "./styled";
import { Typography } from "../../core/theme/typography";
import { CardContainer } from "../../core/styled";

interface CardProps {
  title: string;
  text?: string | number;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const InformationCard: React.FC<CardProps> = ({
  title,
  text,
  icon,
  style,
  footer,
  children,
}) => {
  return (
    <CardContainer style={style}>
      {icon && <S.IconContainer>{icon}</S.IconContainer>}
      <S.Content>
        <Typography.Heading3>{title}</Typography.Heading3>
        {text && <Typography.BodyMedium>{text}</Typography.BodyMedium>}
        {children}
      </S.Content>
      {footer && <S.Footer>{footer}</S.Footer>}
    </CardContainer>
  );
};

export default InformationCard;
