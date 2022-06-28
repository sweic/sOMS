import React, { ReactNode } from "react";
import { InfoContainer, InfoDetails, InfoHeading, InfoLabel } from "./Styles";

interface InfoProps {
  logo?: ReactNode;
  label: string;
  details: ReactNode;
}

function Info({ logo, label, details }: InfoProps) {
  return (
    <InfoContainer>
      <InfoHeading>
        {logo}
        <InfoLabel>{label}</InfoLabel>
      </InfoHeading>
      <InfoDetails>{details}</InfoDetails>
    </InfoContainer>
  );
}

export default Info;
