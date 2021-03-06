import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface IProps {
  size?: string;
}

export const Spinner = styled.div.attrs((p: IProps) => ({
  size: p.size || "1em",
}))`
  width: ${p => p.size};
  height: ${p => p.size};
  border-width: calc(${p => p.size} / 5);
  border-style: solid;
  border-color: ${p => p.theme.primary} transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
