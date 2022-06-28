import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  padding-top: 0.5em;
  padding-left: min(1.5em, 1vw);
  overflow-y: auto;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: space-evenly;
`;
export const SectionBox = styled.div`
  flex-basis: 160px;
  width: 160px;
  max-width: 200px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
`;

export const SectionText = styled.div`
  margin: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
export const AddToCartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding-right: 0.5em;
`;
