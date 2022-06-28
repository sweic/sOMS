import { gql } from "@apollo/client";
import { ActionIcon, Group, Paper } from "@mantine/core";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Check, Printer } from "tabler-icons-react";
import Loading from "../../../../../shared/components/Loading/Loading";
import Client from "../../../../../shared/utils/createApolloClient";
import { useVacateTable } from "../../../hooks/useService";
import {
  BillBox,
  BillContainer,
  BillContent,
  BillHeader,
  BillHeaderComponent,
  BillInfo,
  BillItem,
  BillItemsContainer,
  BillText,
  BillTotal,
} from "./Styles";

function Bill() {
  const { tableid } = useParams();
  const [tableBillData, setTableBillData] = useState<TableBillSummary>(
    {} as TableBillSummary
  );
  const componentRef = useRef() as MutableRefObject<HTMLDivElement>;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const navigate = useNavigate();
  const tableVacater = useVacateTable();
  useEffect(() => {
    if (!tableid) return;
    console.time("s");
    const tableData: TableBillCache | null = Client.readFragment({
      id: `Table:${tableid}`,
      fragment: tableFragment,
    });
    if (!tableData) return;
    const totalBill = tableData.orders
      .reduce((a, v) => {
        return a + parseFloat(v.price);
      }, 0)
      .toString();
    var allOrderItems: { [key: number]: any } = {};
    for (const order of tableData.orders) {
      for (const item of order.orderitems) {
        allOrderItems = {
          ...allOrderItems,
          ...(item.foodid in allOrderItems
            ? {
                [item.foodid]: {
                  ...allOrderItems[item.foodid],
                  quantity: allOrderItems[item.foodid].quantity + item.quantity,
                  totalPrice:
                    allOrderItems[item.foodid].totalPrice + item.totalPrice,
                },
              }
            : {
                [item.foodid]: {
                  ...item,
                },
              }),
        };
      }
    }
    const creationTime = new Date(tableData.createdAt);
    const createdAt = `${creationTime.getHours()}:${creationTime
      .getMinutes()
      .toString()
      .padStart(2, "0")} ${creationTime.getDate()}/${
      creationTime.getMonth() + 1
    }/${creationTime.getFullYear()}`;
    const tmpTableBill: TableBillSummary = {
      id: tableData.id,
      sessionid: tableData.session.id,
      tableNumber: tableData.tableNumber,
      createdAt,
      totalBill,
      orderitems: Object.values(allOrderItems),
    };
    setTableBillData(tmpTableBill);
  }, [tableid]);
  return (
    <>
      {Object.keys(tableBillData).length > 0 ? (
        <BillContainer ref={componentRef}>
          <BillBox>
            <Paper
              withBorder
              shadow="md"
              style={{ height: "100%", width: "100%" }}
            >
              <BillInfo>
                <BillHeader>
                  <BillHeaderComponent>
                    <BillText fontSize={28}>Bill</BillText>
                    <Group>
                      <ActionIcon
                        variant="filled"
                        onClick={async () => {
                          const res = await tableVacater(tableBillData.id);
                          if (res.data) navigate("/admin/service");
                        }}
                      >
                        <Check color="white" />
                      </ActionIcon>
                      <ActionIcon
                        variant="filled"
                        onClick={() => handlePrint()}
                      >
                        <Printer color="white" />
                      </ActionIcon>
                    </Group>
                  </BillHeaderComponent>
                  <BillHeaderComponent>
                    <BillText>Table No. {tableBillData.tableNumber}</BillText>
                    <BillText>Created at: {tableBillData.createdAt}</BillText>
                  </BillHeaderComponent>
                </BillHeader>
                <BillContent>
                  <BillItemsContainer>
                    {tableBillData.orderitems.map((item, idx) => {
                      return (
                        <BillItem key={item.foodid}>
                          <BillText>
                            {idx + 1}. {item.title} x {item.quantity}
                          </BillText>
                          <BillText>
                            ${parseFloat(item.totalPrice).toFixed(2)}
                          </BillText>
                        </BillItem>
                      );
                    })}
                  </BillItemsContainer>
                  <BillTotal>
                    <BillText>
                      Subtotal: $
                      {parseFloat(tableBillData.totalBill).toFixed(2)}
                    </BillText>
                  </BillTotal>
                </BillContent>
              </BillInfo>
            </Paper>
          </BillBox>
        </BillContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Bill;

const tableFragment = gql`
  fragment Bill on Table {
    id
    tableNumber
    active
    token
    session {
      id
    }
    createdAt
    orders {
      id
      price
      orderitems {
        id
        totalPrice
        quantity
        title
        foodid
      }
    }
  }
`;

interface TableBillCache {
  id: number;
  tableNumber: number;
  active: boolean;
  token: string;
  session: {
    id: number;
  };
  createdAt: any;
  orders: {
    id: number;
    price: string;
    orderitems: {
      id: number;
      totalPrice: string;
      quantity: number;
      title: string;
      foodid: number;
    }[];
  }[];
}

interface TableBillSummary {
  id: number;
  tableNumber: number;
  sessionid: number;
  orderitems: {
    totalPrice: string;
    quantity: number;
    title: string;
    foodid: number;
  }[];
  totalBill: string;
  createdAt: any;
}
