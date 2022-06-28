import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../utils/context";
import {
  CustomerValidationError,
  LastOrderError,
  NoServiceError,
  UnavailableItemsError,
} from "../utils/errors";
import { getRedisAsync } from "../utils/redis";

export const CustomerOrder: MiddlewareFn<MyContext> = async (
  { context, args },
  next
) => {
  // Check if there is even a Service atm.
  const service = await getRedisAsync("menu");
  if (parseInt(service!) === 0 || undefined)
    throw new NoServiceError("service over");

  // Validates customer's token.
  const auth = context.req.headers.authorization?.split(" ")[1];
  const token = await getRedisAsync(`TableNum:${args.data.tableNumber}`);
  if (auth !== token) throw new CustomerValidationError("token expired");

  return next();
};

export const CreateOrder: MiddlewareFn<MyContext> = async ({ args }, next) => {
  // Checks if order is made within last order timing
  const lastOrder = await getRedisAsync("lastOrder");
  if (parseInt(lastOrder!) < Date.now()) throw new LastOrderError("last order");

  // checks if all cart items are available in realtime.
  const availability = await getRedisAsync("availability");
  const foodAvailability = JSON.parse(availability!);
  var unavailableFoodItems = [];
  for (const val of args.data.orderitems?.createMany?.data!) {
    if (foodAvailability[val.foodid] !== true) {
      unavailableFoodItems.push(val.title);
    }
  }
  if (unavailableFoodItems.length > 0)
    throw new UnavailableItemsError("unavailable", unavailableFoodItems);

  return next();
};
