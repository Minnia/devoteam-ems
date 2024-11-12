import styled from "styled-components";
import tokens from "../../../core/theme/tokens";

export const BreadcrumbContainer = styled.nav`
  display: inline;
  position: fixed;
  right: ${tokens.margin.BASELINE * 2}px;
`;

export const Separator = styled.span`
  margin: 0 ${tokens.margin.BASELINE}px;
`;
