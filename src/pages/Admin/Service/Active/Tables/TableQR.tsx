import React, { MutableRefObject, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Button } from "@mantine/core";
import { TableTokenContainer, TableTokenPrint } from "./Styles";
import { ArrowBack } from "tabler-icons-react";

function TableQR() {
  const navigate = useNavigate();
  const { token } = useParams();
  const componentRef = useRef() as MutableRefObject<HTMLDivElement>;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const origin = window.location.origin;
  return (
    <>
      {token && (
        <TableTokenPrint>
          <ArrowBack cursor="pointer" onClick={() => navigate(-1)} />
          <TableTokenContainer ref={componentRef}>
            <h2>Scan this QR Code to Order!</h2>
            <QRCodeSVG value={`${origin}/token/${token}`} />
            <span>{`${origin}/token/${token}`}</span>
          </TableTokenContainer>
          <Button onClick={() => handlePrint()}>Print</Button>
        </TableTokenPrint>
      )}
    </>
  );
}

export default TableQR;
