import styled from "styled-components";
import { color } from "../../../styles/constants";

export const IconBtn = styled.button`
  background-color: ${color.primary};
  color: white;
  cursor: pointer;
  border: 0px transparent;
  height: 36px;
  width: 36px;

  &:hover {
    background-color: ${color.highlight};
  }

  &:active {
    transform: translateY(2px);
  }
`;
