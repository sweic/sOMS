import {
  NumberInputHandlers,
  ActionIcon,
  NumberInput,
  Stack,
  Group,
  Avatar,
} from "@mantine/core";
import React, { useRef } from "react";
import { Meat, Trash } from "tabler-icons-react";
import { cartQuery } from "../../../shared/graphql/Customer/gql";
import {
  CustomerOrderItem,
  SerializedCartType,
} from "../../../shared/graphql/Customer/types";
import Client from "../../../shared/utils/createApolloClient";
import {
  CartFoodItemBox,
  CartFoodItemTop,
  CartFoodTitle,
  CartFoodText,
  CartFoodRight,
  CartFoodItemBottom,
  CartFoodName,
} from "./Styles";

interface CartItemProps {
  cartItem: CustomerOrderItem;
  serializedCart: SerializedCartType;
  refetch: () => void;
}

function CartItem({ cartItem, serializedCart, refetch }: CartItemProps) {
  const handlerRef = useRef<NumberInputHandlers>();
  return (
    <CartFoodItemBox key={cartItem.foodid}>
      <Stack style={{ width: "100%", height: "100%" }}>
        <CartFoodItemTop>
          <CartFoodTitle>
            <Group>
              <CartFoodName>{cartItem.title}</CartFoodName>
              <CartFoodText>
                ${parseFloat(cartItem.price).toFixed(2)}
              </CartFoodText>
            </Group>
            <Group spacing={5}>
              <ActionIcon
                size={32}
                variant="default"
                onClick={() => handlerRef.current?.decrement()}
              >
                -
              </ActionIcon>
              <NumberInput
                hideControls
                min={1}
                value={cartItem.quantity}
                onChange={(val) => {
                  if (val === undefined || val % 1 != 0) return;
                  const newData = {
                    serializedCart: {
                      ...serializedCart.serializedCart,
                      [cartItem.foodid]: {
                        ...cartItem,
                        quantity: val,
                        totalPrice: parseFloat(cartItem.price) * val!,
                      },
                    },
                  };
                  Client.writeQuery({ query: cartQuery, data: newData });

                  refetch();
                }}
                handlersRef={handlerRef}
                styles={{
                  input: { width: 48, textAlign: "center", fontSize: "0.8rem" },
                }}
              />
              <ActionIcon
                size={32}
                variant="default"
                onClick={() => handlerRef.current?.increment()}
              >
                +
              </ActionIcon>
              <Trash
                cursor="pointer"
                onClick={() => {
                  var newData = {};
                  for (const [key, value] of Object.entries(
                    serializedCart.serializedCart
                  )) {
                    if (key === cartItem.foodid.toString()) continue;
                    newData = { ...newData, [key]: value };
                  }
                  Client.writeQuery({
                    query: cartQuery,
                    data: { serializedCart: newData },
                  });
                  refetch();
                }}
              />
            </Group>
          </CartFoodTitle>
          <CartFoodRight>
            <CartFoodText>
              ${parseFloat(cartItem.totalPrice).toFixed(2)}
            </CartFoodText>
            <Avatar src={cartItem.imageURL} size={64}>
              <Meat />
            </Avatar>
          </CartFoodRight>
        </CartFoodItemTop>
        <CartFoodItemBottom></CartFoodItemBottom>
      </Stack>
    </CartFoodItemBox>
  );
}

export default CartItem;
