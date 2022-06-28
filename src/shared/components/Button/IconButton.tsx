import React, { forwardRef } from "react";
import { IconBtn } from "./Styles";
interface IconButtonProps {
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: any;
}
export const IconButton = forwardRef(
  ({ icon, onClick, ...props }: IconButtonProps, ref) => {
    return (
      <IconBtn
        {...props}
        onClick={onClick}
        ref={ref as React.RefObject<HTMLButtonElement>}
      >
        {icon}
      </IconBtn>
    );
  }
);
