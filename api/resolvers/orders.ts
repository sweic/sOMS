import {
  Args,
  Ctx,
  Mutation,
  PubSub,
  PubSubEngine,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { MyContext } from "../utils/context";
import { CreateOrder, CustomerOrder } from "../middleware/customerAuth";
import { UpdateOrderArgs } from "../prisma/generated/type-graphql/resolvers/crud/Order/args/UpdateOrderArgs";
import { Order } from "../prisma/generated/type-graphql/models/Order";
import { CreateOrderArgs } from "../prisma/generated/type-graphql/resolvers/crud/Order/args/CreateOrderArgs";
import { DatabaseError } from "../utils/errors";
import { getPrismaFromContext } from "../prisma/generated/type-graphql/helpers";
import { AdminAuth } from "../middleware/adminAuth";

@Resolver()
export class OrderResolver {
  @Mutation((_returns) => Order, {})
  @UseMiddleware(CustomerOrder, CreateOrder)
  async createSafeOrder(
    @Ctx() { prisma }: MyContext,
    @Args() args: CreateOrderArgs,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Order> {
    const res = await prisma.order.create({
      ...args,
    });
    await pubSub.publish("NEW_ORDER", "");
    return res;
  }

  @Mutation((_returns) => Order)
  @UseMiddleware(AdminAuth)
  async completeOrder(
    @Ctx() ctx: MyContext,
    @Args() args: UpdateOrderArgs,
    @PubSub() pubSub: PubSubEngine
  ) {
    try {
      const res = await getPrismaFromContext(ctx).order.update({
        ...args,
      });
      pubSub.publish("COMPLETE_ORDER", res.id);
      await getPrismaFromContext(ctx).session.update({
        where: {
          id: res.sessionid,
        },
        data: {
          revenue: {
            increment: res.price,
          },
        },
      });
      return res;
    } catch (error) {
      throw new DatabaseError("");
    }
  }
}
