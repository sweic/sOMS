import { Button, Paper } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Check, Qrcode } from "tabler-icons-react";
import { TableEntity } from "../../../../../shared/graphql/Admin/types";
import { TableInfoContainer } from "./Styles";

function TableInfo({ info }: { info: TableEntity }) {
  const navigate = useNavigate();

  return (
    <Paper withBorder shadow="md" style={{ width: "240px", height: "240px" }}>
      <TableInfoContainer>
        <ul>
          <li>Table No. {info.tableNumber}</li>
          <li>Filled</li>
        </ul>
        <Button
          leftIcon={<Check />}
          onClick={() => navigate(`/admin/service/bill/${info.id}`)}
        >
          Complete Order
        </Button>
        <Button
          leftIcon={<Qrcode />}
          onClick={() => navigate(`/admin/service/table/${info.token}`)}
        >
          Show QR Code
        </Button>
      </TableInfoContainer>
      <div></div>
    </Paper>
  );
}

export default TableInfo;
