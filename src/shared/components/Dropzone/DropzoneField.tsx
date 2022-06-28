import { Avatar, Group, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import {
  DropzoneContainer,
  DropzoneFieldContainer,
  DropzoneInfo,
} from "./Styles";

function DropzoneField({
  mergeState,
  existingImage,
}: {
  mergeState: (newState: Record<string, any>) => void;
  existingImage?: string;
}) {
  const [currentFile, setCurrentFile] = useState<File>();
  const [imageURL, setImageURL] = useState<string>(existingImage || "");
  return (
    <DropzoneFieldContainer>
      <Dropzone
        style={{ minHeight: "64px" }}
        maxSize={1024 * 2000}
        multiple={false}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          var reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = () => {
            setCurrentFile(files[0]);
            mergeState({
              image: {
                imageURL: reader.result,
              },
            });
            setImageURL(reader.result! as string);
          };
        }}
        onReject={() =>
          showNotification({
            color: "red",
            title: "Oops!",
            message: "File selected is too large/not an image",
          })
        }
      >
        {(status) => {
          return (
            <DropzoneContainer>
              {currentFile ? (
                <>
                  <Avatar src={imageURL} />
                  <DropzoneInfo>{currentFile.name}</DropzoneInfo>
                  <DropzoneInfo style={{ fontWeight: "bold" }}>
                    {(currentFile.size / 1000).toFixed(1)} KB
                  </DropzoneInfo>
                </>
              ) : imageURL ? (
                <Group>
                  <Avatar src={imageURL} />
                  <Text>Drop new image here. Max 2MB</Text>
                </Group>
              ) : (
                "Drop your image file here. Max 2MB"
              )}
            </DropzoneContainer>
          );
        }}
      </Dropzone>
    </DropzoneFieldContainer>
  );
}

export default DropzoneField;
