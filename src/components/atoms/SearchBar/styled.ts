import styled, { css, keyframes } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { themes } from "../../../core/theme/theme";
import { Input } from "antd";
import tokens from "../../../core/theme/tokens";

export const Container = styled.div<{ hover?: boolean }>`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 4px solid ${themes.light.accent};

  padding: 5px;

  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 20%;
      border: 4px solid ${themes.light.accent};
    `}
`;

export const SearchInput = styled(Input)<{ $showSearchInput: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 42px;

  line-height: 16px;
  outline: 0;
  border: 0;
  font-size: 12px;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;

  appearance: none;

  display: ${(props) => (props.$showSearchInput ? "block" : "none")};
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: ${themes.light.accent};
  z-index: 10;
`;

export const IconMagnifyingGlass = styled(SearchOutlined)`
  ${IconCommonCss}
`;
