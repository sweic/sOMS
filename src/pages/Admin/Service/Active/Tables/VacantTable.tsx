import { Button, Paper } from "@mantine/core";
import { info } from "console";
import React from "react";
import { TableInfoContainer } from "./Styles";

function VacantTable({
  tableNum,
  creator,
  sessionid,
  refetch,
}: {
  tableNum: number;
  sessionid: number;
  creator: (tableNum: number, sessionid: number) => Promise<void>;
  refetch: () => void;
}) {
  const submitHandler = async () => {
    await creator(tableNum, sessionid);
    refetch();
  };
  return (
    <Paper withBorder shadow="md" style={{ width: "240px", height: "240px" }}>
      <TableInfoContainer>
        <ul>
          <li>Table No. {tableNum}</li>
          <li>Vacant</li>
        </ul>
        <Button onClick={async () => submitHandler()}>Create</Button>
      </TableInfoContainer>
    </Paper>
  );
}

export default VacantTable;
