import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  ClickableOverlay,
  CloseButtonBox,
  ScrollOverlay,
  StyledModal,
} from "./Styles";
import { CSSTransition } from "react-transition-group";
import { Cross, X } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  renderLink?: (modal: { open: () => void }) => JSX.Element;
  renderContent: (modal: { close: () => void }) => JSX.Element;
  width: number;
  withCloseButton?: boolean;
}
function Modal({
  isOpen: propsIsOpen,
  onClose,
  renderLink,
  width,
  renderContent,
  withCloseButton,
}: ModalProps) {
  const [stateIsOpen, setStateIsOpen] = useState<boolean>(false);
  const isControlled = typeof propsIsOpen === "boolean";
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;
  const root = document.getElementById("root");
  return (
    <>
      {!isControlled && renderLink!({ open: () => setStateIsOpen(true) })}
      {ReactDOM.createPortal(
        <CSSTransition
          in={isOpen}
          timeout={300}
          unmountOnExit
          mountOnEnter
          classNames="modal"
        >
          <ScrollOverlay>
            <ClickableOverlay>
              <StyledModal width={width} isOpen>
                {withCloseButton && (
                  <CloseButtonBox>
                    <ActionIcon
                      onClick={
                        isControlled
                          ? () => onClose!()
                          : () => setStateIsOpen(false)
                      }
                    >
                      <X size={16} />
                    </ActionIcon>
                  </CloseButtonBox>
                )}
                {renderContent({
                  close: isControlled
                    ? () => onClose!()
                    : () => setStateIsOpen(false),
                })}
              </StyledModal>
            </ClickableOverlay>
          </ScrollOverlay>
        </CSSTransition>,
        root!
      )}
    </>
  );
}

export default Modal;
