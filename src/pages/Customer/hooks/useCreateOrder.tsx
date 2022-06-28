import { useCreateSafeOrderMutation } from "../../../generated/graphql";
import {
  customerCache,
  orderQuery,
} from "../../../shared/graphql/Customer/gql";
import {
  CustomerCacheQuery,
  CustomerOrderItem,
  CustomerOrderQuery,
  SerializedCartType,
} from "../../../shared/graphql/Customer/types";
import Client from "../../../shared/utils/createApolloClient";

export const useCreateOrder = () => {
  const [orderCreator] = useCreateSafeOrderMutation();

  const creator = async (serializedCart: SerializedCartType) => {
    const customerData: CustomerCacheQuery | null = Client.readQuery({
      query: customerCache,
    });
    if (customerData === null) return;
    const cartData = serializedCart.serializedCart;
    const newData = {
      price: Object.values(cartData).reduce((a, v) => {
        return a + parseFloat(v.totalPrice);
      }, 0),
      tableNumber: customerData.customerTable.tableNumber,
      table: {
        connect: {
          id: customerData.customerTable.id,
        },
      },
      session: {
        connect: {
          id: customerData.customerTable.session.id,
        },
      },
      orderitems: {
        createMany: {
          data: Object.values(cartData).map((cartItem) => {
            return {
              foodid: cartItem.foodid,
              quantity: cartItem.quantity,
              totalPrice: cartItem.totalPrice.toString(),
              title: cartItem.title,
            };
          }),
        },
      },
    };
    return await orderCreator({
      variables: {
        data: {
          price: Object.values(cartData)
            .reduce((a, v) => {
              return a + parseFloat(v.totalPrice);
            }, 0)
            .toString(),
          tableNumber: customerData.customerTable.tableNumber,
          table: {
            connect: {
              id: customerData.customerTable.id,
            },
          },
          session: {
            connect: {
              id: customerData.customerTable.session.id,
            },
          },
          orderitems: {
            createMany: {
              data: Object.values(cartData).map((cartItem) => {
                return {
                  foodid: cartItem.foodid,
                  quantity: cartItem.quantity,
                  totalPrice: cartItem.totalPrice.toString(),
                  title: cartItem.title,
                };
              }),
            },
          },
        },
      },
      update: (cache, { data }) => {
        cache.updateQuery(
          {
            query: orderQuery,
          },
          (previousData) => {
            return {
              orders: [...previousData.orders, data?.createSafeOrder],
            };
          }
        );

        cache.updateQuery(
          {
            query: customerCache,
          },
          (previousData) => {
            return {
              customerTable: {
                ...previousData.customerTable,
                orders: [
                  ...previousData.customerTable.orders,
                  data?.createSafeOrder,
                ],
              },
              currentMenu: previousData.currentMenu,
            };
          }
        );
        cache.evict({
          id: "ROOT_QUERY",
          fieldName: "serializedCart",
        });
        cache.gc();
      },
    });
  };

  return creator;
};
