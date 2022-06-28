import styled from "styled-components";
import { color } from "../../../../../styles/constants";

interface Text {
  fontSize?: number;
}

export const BillContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: min(1.5em, 2vw);
  padding-right: min(1.5em, 2vw);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const BillBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: calc(100% - 32px) !important;
  @media (min-width: 1000px) {
    width: 600px;
  }
`;

export const BillInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const BillContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  min-height: 0;
`;

export const BillHeader = styled.div`
  background-color: ${color.primary};
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 0.5em 1em;
`;

export const BillHeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BillText = styled.span<Text>`
  font-size: ${(props) => props.fontSize}px;
`;

export const BillItemsContainer = styled.div`
  display: block;
  overflow-y: auto;
  min-height: 0;
`;
export const BillItem = styled.div`
  border-bottom: 1px gray solid;
  display: flex;
  min-width: 0;
  height: 80px;
  align-items: flex-start;
  margin: 0.5em;
  padding: 1em 0.5em;
  justify-content: space-between;
`;

export const BillTotal = styled.div`
  height: 100px;
  background-color: ${color.primary};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  padding-right: min(1.5em, 2vw);
`;
