import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IdleServiceActions, IdleServiceContainer } from "./Styles";

function IdleService() {
  const navigate = useNavigate();
  return (
    <IdleServiceContainer>
      <IdleServiceActions>
        <h2>No active service!</h2>
        <Button onClick={() => navigate("/admin/service/new")}>Start</Button>
      </IdleServiceActions>
    </IdleServiceContainer>
  );
}

export default IdleService;
