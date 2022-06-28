import styled from "styled-components";
import { color } from "../../../styles/constants";

export const MenusViewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.5em;
  padding-left: min(1.5em, 3vw);
  padding-right: min(1.5em, 3vw);
  overflow-y: auto;
`;

export const MenuNavigation = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.5em;
  width: 100%;
  justify-content: space-between;
`;
export const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2em;
`;

export const MenusHeading = styled.h1`
  color: ${color.primary};
`;
export const MenuTableHeading = styled.th`
  text-align: center !important;
`;
export const MenuTableR = styled.tr`
  max-width: 100%;
  max-height: 48px !important;
`;
export const MenuTableBody = styled.tbody`
  max-width: 100%;
  text-align: center !important;
  cursor: pointer;
`;

export const MenuTableD = styled.td`
  padding: 1.2em;
  max-width: 100px;
  word-wrap: break-word;
`;

export const DesktopView = styled.div`
  display: block;
  height: 100%;
  @media (min-width: 600px) {
    display: block !important;
  }
`;
export const MobileView = styled.div`
  display: none;
  @media (max-width: 599px) {
    display: block;
  }
`;

export const AccordionLabelBox = styled.div`
  padding-right: 1em;
  display: flex;
  justify-content: space-between;
  word-wrap: break-word;
  > * {
    word-wrap: break-word;
  }
`;

export const AccordionLabelTitle = styled.div`
  max-width: 85%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TableLink = styled.a`
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableLinkBox = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
