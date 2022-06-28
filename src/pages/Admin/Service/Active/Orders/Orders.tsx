import { useSubscription } from "@apollo/client";
import { ActionIcon, Divider, Paper, Text } from "@mantine/core";
import { Check, Trash } from "tabler-icons-react";
import Loading from "../../../../../shared/components/Loading/Loading";
import {
  orderCache,
  ORDER_SUBSCRIPTION,
} from "../../../../../shared/graphql/Admin/gql";
import { OrderCacheQuery } from "../../../../../shared/graphql/Admin/types";
import { useReadQuery } from "../../../../../shared/hooks/useReadQuery";
import Client from "../../../../../shared/utils/createApolloClient";
import { useCompleteOrder, useDeleteOrder } from "../../../hooks/useOrders";
import {
  KitchenOrderActions,
  KitchenOrderContent,
  KitchenOrderDetails,
  KitchenOrderHeading,
  KitchenOrderHeadingComponent,
  KitchenOrderHeadingComponentRight,
  KitchenOrderItem,
  KitchenOrderItemDetails,
  KitchenOrdersBox,
  KitchenOrdersContainer,
} from "./Styles";
function Orders() {
  // const { orderData: orderDatas, checked, getOrderHelper } = useGetOrders();
  const [orderDatas, checked, getOrderHelper] =
    useReadQuery<OrderCacheQuery>(orderCache);
  const orderCompleter = useCompleteOrder();
  const orderDeleter = useDeleteOrder();
  useSubscription(ORDER_SUBSCRIPTION, {
    onSubscriptionData: async ({ subscriptionData }) => {
      await Client.cache.modify({
        fields: {
          tables: () =>
            subscriptionData.data.newOrderNotification.current.tables,
          orders: () =>
            subscriptionData.data.newOrderNotification.current.orders,
        },
      });
      getOrderHelper();
    },
  });

  return (
    <KitchenOrdersContainer>
      <KitchenOrdersBox>
        {checked ? (
          orderDatas.orders.length === 0 ? (
            <Text>No orders.</Text>
          ) : (
            orderDatas.orders.map((orderItem) => {
              if (orderItem.completedAt !== null) return;
              const createdAt = new Date(Date.parse(orderItem.createdAt));
              const formattedTime = `${createdAt.getHours()}:${createdAt
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;
              return (
                <KitchenOrderItem key={orderItem.id}>
                  <Paper
                    withBorder
                    shadow="lg"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <KitchenOrderContent>
                      <KitchenOrderHeading>
                        <KitchenOrderHeadingComponent>
                          <span>{formattedTime}</span>
                          <span>Table No. {orderItem.tableNumber}</span>
                        </KitchenOrderHeadingComponent>
                        <KitchenOrderHeadingComponentRight>
                          <KitchenOrderActions>
                            <ActionIcon
                              variant="filled"
                              onClick={async () => {
                                await orderCompleter(orderItem.id);
                                getOrderHelper();
                              }}
                            >
                              <Check color="white" />
                            </ActionIcon>
                            <ActionIcon
                              variant="filled"
                              onClick={async () => {
                                await orderDeleter(orderItem.id);
                                getOrderHelper();
                              }}
                            >
                              <Trash color="white" />
                            </ActionIcon>
                          </KitchenOrderActions>

                          <span>#{orderItem.id}</span>
                        </KitchenOrderHeadingComponentRight>
                      </KitchenOrderHeading>
                      <KitchenOrderDetails>
                        {orderItem.orderitems.map((fooditem) => {
                          return (
                            <KitchenOrderItemDetails key={fooditem.id}>
                              <span>
                                {fooditem.title} x{fooditem.quantity}
                              </span>
                            </KitchenOrderItemDetails>
                          );
                        })}
                      </KitchenOrderDetails>
                    </KitchenOrderContent>
                  </Paper>
                </KitchenOrderItem>
              );
            })
          )
        ) : (
          <Loading />
        )}
      </KitchenOrdersBox>
    </KitchenOrdersContainer>
  );
}

export default Orders;
