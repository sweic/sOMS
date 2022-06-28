import { useSubscription } from "@apollo/client";
import { Badge, Paper, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Loading from "../../../shared/components/Loading/Loading";
import {
  COMPLETE_ORDER,
  customerCache,
  orderQuery,
} from "../../../shared/graphql/Customer/gql";
import {
  CustomerCacheQuery,
  CustomerOrderQuery,
} from "../../../shared/graphql/Customer/types";
import { useReadQuery } from "../../../shared/hooks/useReadQuery";
import { convertTime } from "../../../shared/utils/convertTime";
import Client from "../../../shared/utils/createApolloClient";
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

function Orders() {
  const [data, loaded, refetch] =
    useReadQuery<CustomerCacheQuery>(customerCache);
  const navigate = useNavigate();

  useSubscription(COMPLETE_ORDER, {
    onSubscriptionData: (data) => {
      const currentOrders = Client.readQuery<CustomerOrderQuery>({
        query: orderQuery,
      });
      const orderID = data.subscriptionData.data.completeOrderNotification;
      currentOrders!.orders.map((order: any) => {
        if (order.id === orderID) {
          refetch();
        }
      });
    },
  });

  return (
    <>
      {Object.keys(data).length ? (
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
                      <Text color="white" size="lg">
                        All Orders ({data.customerTable.orders.length})
                      </Text>
                      <Badge>
                        Table Number: {data.customerTable.tableNumber}
                      </Badge>
                    </AllOrdersHeaderBottom>
                    <AllOrdersHeaderBottom>
                      <Text color="white">
                        Customer ID: {data.customerTable.id}{" "}
                      </Text>
                      <Text color="white">
                        Last Order: {"\n"}
                        {convertTime(
                          data.customerTable.session.lastOrder,
                          true
                        )}
                      </Text>
                    </AllOrdersHeaderBottom>
                  </AllOrdersHeader>
                  <AllOrdersContent>
                    {data.customerTable.orders.map((order) => {
                      return (
                        <CustomerOrderContainer key={order.id}>
                          <Paper
                            withBorder
                            shadow="sm"
                            style={{ height: "100%", width: "100%" }}
                          >
                            <CustomerOrderContent
                              onClick={() =>
                                navigate(`/order/order-${order.id}`)
                              }
                            >
                              <Text>Order ID: {order.id}</Text>
                              <Text size="sm">
                                Created at:{" "}
                                {convertTime(order.createdAt, false)}
                              </Text>
                              <Text size="sm">
                                Status:{" "}
                                {order.completedAt ? "Completed" : "Preparing"}
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
                    Subtotal: $
                    {data.customerTable.orders
                      .reduce((a, v) => {
                        return a + parseFloat(v.price);
                      }, 0)
                      .toFixed(2)}
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

export default Orders;
