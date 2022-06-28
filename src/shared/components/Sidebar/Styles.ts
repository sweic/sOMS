import styled from "styled-components";
import { color } from "../../../styles/constants";

interface SidebarContainerProps {
  expanded: boolean;
}
export const SidebarContainer = styled.div<SidebarContainerProps>`
  height: 100vh;
  overflow-y: auto;
  padding-top: 1em;
  min-width: 280px;
  background-color: ${color.primary};
  z-index: 999;
  @media (max-width: 1000px) {
    position: absolute;
    width: ${(props) => (props.expanded ? "280px" : "0px")} !important;
    transform: translateX(-100%);
    transform: ${(props) =>
      props.expanded ? "translateX(0%)" : "translateX(-100%)"};
    transition: 350ms ease-out;
  }
`;

export const SidebarItemsContainer = styled.div`
  display: block;
  height: 100%;
`;

export const SidebarComponent = styled.div`
  width: 100%;
  height: 64px;
  color: white;
  display: flex;
  gap: 1em;
  cursor: pointer;
  padding-left: 1em;
  align-items: center;

  &:hover {
    background-color: ${color.highlight};
  }
`;

export const MobileNavbar = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  background-color: ${color.primary};

  @media (min-width: 1001px) {
    display: none;
  }
`;

export const SidebarX = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1001px) {
    display: none;
  }
`;
