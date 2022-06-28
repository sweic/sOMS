import { Button, Paper } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import Loading from "../../../shared/components/Loading/Loading";
import { cartQuery } from "../../../shared/graphql/Customer/gql";
import { SerializedCartType } from "../../../shared/graphql/Customer/types";
import { useReadQuery } from "../../../shared/hooks/useReadQuery";
import Client from "../../../shared/utils/createApolloClient";
import { useCreateOrder } from "../hooks/useCreateOrder";
import CartItem from "./CartItem";
import {
  CartContainer,
  CartContent,
  CartFoodItems,
  CartFoodName,
  CartTableBox,
  CartTotal,
  CartTotalPrice,
} from "./Styles";

function Cart() {
  const [serializedCart, loaded, refetch] =
    useReadQuery<SerializedCartType>(cartQuery);
  const creator = useCreateOrder();
  const submitHandler = async () => {
    const res = await creator(serializedCart!);
    if (res?.data?.createSafeOrder !== null) {
      showNotification({
        title: "Order placed!",
        message: "Your order has been successfully placed!",
        color: "green",
      });
      refetch();
    }
  };

  return (
    <>
      {loaded ? (
        <CartContainer>
          <h1>Cart</h1>
          <>
            {Object.keys(serializedCart).length !== 0 &&
            Object.keys(serializedCart.serializedCart).length !== 0 ? (
              <CartTableBox>
                <Paper
                  withBorder
                  shadow="md"
                  style={{ width: "100%", height: "100%" }}
                >
                  <CartContent>
                    <CartFoodItems>
                      {Object.values(serializedCart.serializedCart).map(
                        (cartItem) => {
                          return (
                            <CartItem
                              key={cartItem.foodid}
                              cartItem={cartItem}
                              serializedCart={serializedCart}
                              refetch={refetch}
                            />
                          );
                        }
                      )}
                    </CartFoodItems>
                    <CartTotal>
                      <CartTotalPrice>
                        <CartFoodName>Total</CartFoodName>
                        <CartFoodName>
                          $
                          {Object.values(serializedCart.serializedCart)
                            .reduce((a, v) => {
                              return a + parseFloat(v.totalPrice);
                            }, 0)
                            .toFixed(2)}
                        </CartFoodName>
                      </CartTotalPrice>
                      <Button onClick={() => submitHandler()}>Order!</Button>
                    </CartTotal>
                  </CartContent>
                </Paper>
              </CartTableBox>
            ) : (
              <>Cart Empty</>
            )}
          </>
        </CartContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Cart;
