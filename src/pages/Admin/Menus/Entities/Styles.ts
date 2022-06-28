import styled from "styled-components";
import { color } from "../../../../styles/constants";

export const EntityDisplayContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.5em;
  padding-left: min(1.5em, 3vw);
  padding-right: min(1.5em, 3vw);
  display: flex;
  flex-direction: column;
`;

export const EntityHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

export const EntityHeading = styled.h1`
  color: ${color.primary};
`;

export const EntityInfoContainer = styled.div`
  min-width: 300px;
  overflow-y: auto;
  margin-bottom: 1em;
  width: 100%;
`;

export const EntityBasicInfoContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
