import styled from "styled-components";
import tokens from "../../core/theme/tokens";

export const BreadcrumbContainer = styled.div`
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
  z-index: 100000;
  position: absolute;
  margin-left: 200px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
