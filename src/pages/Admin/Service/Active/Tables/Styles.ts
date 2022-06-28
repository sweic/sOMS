import styled from "styled-components";
import { color } from "../../../../../styles/constants";

export const ServiceTableDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 1.5em;
  justify-content: flex-start;
`;

export const TableInfoContainer = styled.div`
  width: 240px;
  height: 240px;
  border: 1px rgb(0 0 0 / 0.3) solid;
  box-shadow: 0px 1px 10px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  justify-content: center;

  ul {
    padding: 0;
    list-style-type: none;
  }
`;

export const TableTokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin: auto;
`;

export const TableTokenPrint = styled.div`
  margin: auto;
  gap: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
