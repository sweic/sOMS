import styled from "styled-components";
import { color } from "../../../../styles/constants";

export const MenuOverviewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  overflow-y: auto;
  padding: 0.5em 1em;
`;
export const MenuOverviewSections = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0;
  height: 100%;
  gap: 1em;
`;
export const MenuOverviewSectionBlock = styled.div`
  display: block;
`;

export const SectionBlockHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid rgb(0 0 0 / 0.2);
  box-shadow: 0 3px 20px rgb(0 0 0 / 0.1);
  cursor: pointer;
  align-items: center;
  padding: 1em;
  gap: 1em;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-sizing: content-box !important;
  padding-top: 1em;
  padding-left: 3.5em;
  padding-right: min(2.5em, 2vw);
  background-color: rgb(0 0 0 / 0.1);
  padding-bottom: 1em;
`;

export const FoodItemContent = styled.div`
  background-color: white;
  height: 80px;
  padding: 1.5em;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;
