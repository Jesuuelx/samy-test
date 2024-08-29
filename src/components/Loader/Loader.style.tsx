import styled, { css } from "styled-components";

const centerVerticalStyle = (height: number) => css`
  justify-content: center;
  overflow: hidden;
  height: ${`${height}px`};
`;

export const Wrapper = styled.div<{
  centerVertical: boolean;
  height: number;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ centerVertical, height }) =>
    centerVertical && centerVerticalStyle(height)}:
`;
