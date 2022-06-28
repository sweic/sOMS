import { Badge, Paper, Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../shared/components/Loading/Loading";
import { customerOrderFragment } from "../../../shared/graphql/Customer/gql";
import { CustomerOrderItemFragment } from "../../../shared/graphql/Customer/types";
import { useReadFragment } from "../../../shared/hooks/useReadFragment";
import { convertTime } from "../../../shared/utils/convertTime";
import {
  AllOrdersBox,
  AllOrdersContainer,
  AllOrdersContent,
  AllOrdersHeader,
  AllOrdersHeaderBottom,
  AllOrdersInfo,
  AllOrdersTop,
  ContainerSummary,
  CustomerOrderContainer,
  CustomerOrderContent,
} from "./Styles";

function Order() {
  const { orderid } = useParams();
  const [data, loaded] = useReadFragment<CustomerOrderItemFragment>(
    orderid!,
    "Order",
    customerOrderFragment
  );
  return (
    <>
      {loaded ? (
        <AllOrdersContainer>
          <AllOrdersBox>
            <Paper
              withBorder
              shadow="md"
              style={{ height: "100%", width: "100%" }}
            >
              <AllOrdersInfo>
                <AllOrdersTop>
                  <AllOrdersHeader>
                    <AllOrdersHeaderBottom>
                      <Text size="lg" color="white">
                        Order ID: {data.id}
                      </Text>
                      <Badge>Table Number: {data.tableNumber}</Badge>
                    </AllOrdersHeaderBottom>
                    <AllOrdersHeaderBottom>
                      <Text color="white">
                        Created at: {convertTime(data.createdAt, false)}
                      </Text>
                      <Text color="white">
                        {data.createdAt
                          ? `Completed at ${convertTime(
                              data.completedAt,
                              false
                            )}`
                          : "Preparing"}
                      </Text>
                    </AllOrdersHeaderBottom>
                  </AllOrdersHeader>
                  <AllOrdersContent>
                    {data.orderitems.map((item) => {
                      return (
                        <CustomerOrderContainer key={item.foodid}>
                          <Paper
                            withBorder
                            shadow="md"
                            style={{ height: "100%", width: "100%" }}
                          >
                            <CustomerOrderContent>
                              <Text>
                                {item.title} x{item.quantity}
                              </Text>
                              <Text>
                                ${parseFloat(item.totalPrice).toFixed(2)}
                              </Text>
                            </CustomerOrderContent>
                          </Paper>
                        </CustomerOrderContainer>
                      );
                    })}
                  </AllOrdersContent>
                </AllOrdersTop>
                <ContainerSummary>
                  <Text color="white">
                    Order Subtotal: ${parseFloat(data.price).toFixed(2)}
                  </Text>
                </ContainerSummary>
              </AllOrdersInfo>
            </Paper>
          </AllOrdersBox>
        </AllOrdersContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Order;
