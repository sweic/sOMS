import { buildSchema } from "type-graphql";
import { AuthResolver } from "../resolvers/auth";
import { resolvers } from "../prisma/generated/type-graphql";
import { RedisPubSub } from "graphql-redis-subscriptions";
import { TokenResolver } from "../resolvers/token";
import { OrderSubscriptionResolver } from "../resolvers/subscriptions";
import { OrderResolver } from "../resolvers/orders";
import { ServiceResolver } from "../resolvers/service";
import { EditResolver } from "../resolvers/menus";
import { TableResolver } from "../resolvers/tables";
import { LogAccess } from "../middleware/global";
export default async () => {
  const pubSub = new RedisPubSub();
  return await buildSchema({
    resolvers: [
      OrderSubscriptionResolver,
      ...resolvers,
      AuthResolver,
      TokenResolver,
      OrderResolver,
      ServiceResolver,
      EditResolver,
      TableResolver,
    ],
    pubSub,
    globalMiddlewares: [LogAccess],
    validate: false,
  });
};
