import { Button, Text } from "@mantine/core";
import React from "react";
import { Trash } from "tabler-icons-react";
import Modal from "../Modal/Modal";
import { DeleteModalActions, DeleteModalContainer } from "./Styles";
interface ConfirmModalProps {
  confirmMessage: string;
  onConfirm: () => void;
  renderLink?: (modal: { open: () => void }) => JSX.Element;
}
function DeleteModal({
  confirmMessage,
  onConfirm,
  renderLink,
}: ConfirmModalProps) {
  return (
    <>
      <Modal
        width={400}
        withCloseButton
        renderLink={
          !renderLink
            ? (modal) => (
                <Trash
                  color="red"
                  onClick={(e) => {
                    e.stopPropagation();
                    modal.open();
                  }}
                />
              )
            : renderLink
        }
        renderContent={(modal) => (
          <DeleteModalContainer>
            <Text align="left" color="black">
              {confirmMessage}
            </Text>
            <DeleteModalActions>
              <Button onClick={() => modal.close()}>Cancel</Button>
              <Button
                color="red"
                onClick={async () => {
                  await onConfirm();
                  modal.close();
                }}
              >
                Confirm
              </Button>
            </DeleteModalActions>
          </DeleteModalContainer>
        )}
      />
    </>
  );
}

export default DeleteModal;
