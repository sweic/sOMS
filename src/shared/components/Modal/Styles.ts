import styled from "styled-components";
import { mixins } from "../../../styles/constants";

interface StyledModalProps {
  width?: number;
  isOpen: boolean;
}
export const StyledModal = styled.div<StyledModalProps>`
  display: inline-block;
  position: relative;
  width: 100%;
  background: #fff;
  max-width: ${(props) => props.width}px;
  vertical-align: middle;
  border-radius: 3px;
  transform: opacity 5s;
  padding: 1em 1.2em;
  ${mixins.scrollableY}
  ${mixins.boxShadowMedium}
`;
export const ModalBtnContainer = styled.div`
  width: 100%;
  height: 16px;
`;
export const ScrollOverlay = styled.div`
  cursor: auto;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  &.modal-enter {
    opacity: 0;

    & ${StyledModal} {
      transform: scale(0.9);
    }
  }
  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
    & ${StyledModal} {
      transform: translateX(0);
      transition: transform 300ms ease-in-out;
    }
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transition: opacity 300ms, transform 300ms;

    & ${StyledModal} {
      transform: scale(0.9);
      transition: transform 300ms ease-in-out;
    }
  }
`;

export const ClickableOverlay = styled.div`
  min-height: 100%;
  background: rgba(9, 30, 66, 0.54);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
`;

export const DeleteModalBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2em;
`;

export const CloseButtonBox = styled.div`
  position: absolute;
  right: 0.6em;
  top: 0.2em;
`;
