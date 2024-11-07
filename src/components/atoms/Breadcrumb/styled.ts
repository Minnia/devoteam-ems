import styled from "styled-components";

import { Typography } from "../../core/theme/typography";
import tokens from "../../core/theme/tokens";

export const BreadcrumbContainer = styled.div`
  z-index: 1000;
  position: absolute;
  margin-left: 200px;
  padding-top: ${tokens.padding.BASELINE * 2}px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BreadcrumbText = styled.div`
  ${Typography.BodyMedium}
  display: inline;
`;

export const BreadcrumbLink = styled.span<{ $isLast: boolean }>`
  ${Typography.BodyMedium}
  display: inline;
  cursor: ${({ $isLast }) => ($isLast ? "default" : "pointer")};

  &:hover {
    text-decoration: ${({ $isLast }) => ($isLast ? "none" : "underline")};
  }
`;
