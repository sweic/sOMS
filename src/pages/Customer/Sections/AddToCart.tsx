import {
  ActionIcon,
  Group,
  NumberInput,
  NumberInputHandlers,
  Text,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { Check } from "tabler-icons-react";
import {
  cartQuery,
  customerFoodItemFragment,
} from "../../../shared/graphql/Customer/gql";
import {
  CustomerFoodItem,
  SerializedCartType,
} from "../../../shared/graphql/Customer/types";
import Client from "../../../shared/utils/createApolloClient";
import { AddToCartBox } from "./Styles";

function AddToCart({
  fooditemid,
  onClose,
}: {
  fooditemid: number;
  onClose: () => void;
}) {
  const [cartItem, setCartItem] = useState<CustomerFoodItem>(
    {} as CustomerFoodItem
  );
  const [quantity, setQuantity] = useState<number>(1);
  const handlerRef = useRef<NumberInputHandlers>();
  useEffect(() => {
    if (fooditemid === 0) return;
    const serializedCart: SerializedCartType | null = Client.readQuery({
      query: cartQuery,
    });
    const newCartItem: CustomerFoodItem | null = Client.readFragment({
      fragment: customerFoodItemFragment(fooditemid.toString()),
      id: `FoodItem:${fooditemid}`,
    });
    if (newCartItem === null) {
      onClose();
      return;
    }
    const newa = serializedCart?.serializedCart[newCartItem.id];
    if (newa) {
      setQuantity(newa.quantity);
    } else {
      setQuantity(1);
    }
    setCartItem(newCartItem);
  }, [fooditemid]);
  return (
    <>
      {cartItem ? (
        <AddToCartBox>
          <Text>Add to Cart</Text>
          <Group spacing={5}>
            <ActionIcon
              size={42}
              variant="default"
              onClick={() => handlerRef.current?.decrement()}
            >
              -
            </ActionIcon>
            <NumberInput
              hideControls
              value={quantity}
              onChange={(val) => setQuantity(val!)}
              handlersRef={handlerRef}
              styles={{ input: { width: 54, textAlign: "center" } }}
            />
            <ActionIcon
              size={42}
              variant="default"
              onClick={() => handlerRef.current?.increment()}
            >
              +
            </ActionIcon>
          </Group>
          <ActionIcon
            onClick={() => {
              Client.cache.updateQuery({ query: cartQuery }, (data) => {
                return {
                  serializedCart: {
                    ...data?.serializedCart,
                    [fooditemid]: {
                      foodid: fooditemid,
                      quantity,
                      totalPrice: quantity * parseFloat(cartItem.price),
                      title: cartItem.title,
                      price: parseFloat(cartItem.price),
                      imageURL: cartItem.image?.imageURL || "",
                    },
                  },
                };
              });
              onClose();
            }}
          >
            <Check />
          </ActionIcon>
        </AddToCartBox>
      ) : null}
    </>
  );
}

export default AddToCart;
