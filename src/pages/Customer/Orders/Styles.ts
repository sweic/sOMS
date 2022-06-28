import styled from "styled-components";
import { color } from "../../../styles/constants";

export const AllOrdersContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: min(1.5em, 2vw);
  padding-right: min(1.5em, 2vw);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const AllOrdersBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: calc(100% - 32px) !important;
  @media (min-width: 1000px) {
    width: 600px;
  }
`;

export const AllOrdersHeader = styled.div`
  min-height: 92px;
  background-color: ${color.primary};
  padding: 0.8em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AllOrdersHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AllOrdersInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const AllOrdersTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 0;
`;
export const AllOrdersContent = styled.div`
  height: 100%;
  display: block;
  overflow-y: auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;
export const CustomerOrderContainer = styled.div`
  width: 100%;
  height: 110px;
  margin-bottom: 0.4em;
  margin-top: 0.4em;
`;

export const CustomerOrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 0.5em 0.5em;
  cursor: pointer;
`;

export const ContainerSummary = styled.div`
  min-height: 52px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.8em 1em;
  background-color: ${color.primary};
`;
