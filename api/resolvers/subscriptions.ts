import { PrismaClient } from "@prisma/client";
import { Int, Resolver, Root, Subscription } from "type-graphql";
import { Order } from "../prisma/generated/type-graphql/models/Order";
import { Service } from "../prisma/generated/type-graphql/models/Service";
const prisma = new PrismaClient();
@Resolver()
export class OrderSubscriptionResolver {
  @Subscription((_returns) => Service, {
    topics: "NEW_ORDER",
  })
  async newOrderNotification(): Promise<Service | null> {
    return await prisma.service.findUnique({
      where: {
        id: 1,
      },
    });
  }

  @Subscription((_returns) => Int, {
    topics: "COMPLETE_ORDER",
  })
  async completeOrderNotification(
    @Root() orderid: number
  ): Promise<number | null> {
    return orderid;
  }
}
