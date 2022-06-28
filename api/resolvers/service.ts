import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../utils/context";
import { AdminAuth } from "../middleware/adminAuth";
import { UpdateServiceArgs } from "../prisma/generated/type-graphql";
import { getPrismaFromContext } from "../prisma/generated/type-graphql/helpers";
import { FoodItem } from "../prisma/generated/type-graphql/models/FoodItem";
import { Service } from "../prisma/generated/type-graphql/models/Service";
import { UpsertServiceArgs } from "../prisma/generated/type-graphql/resolvers/crud/Service/args/UpsertServiceArgs";
import { setRedisAsync } from "../utils/redis";

@Resolver()
export class ServiceResolver {
  @Mutation((_returns) => Service)
  @UseMiddleware(AdminAuth)
  async upsertSafeService(
    @Ctx() ctx: MyContext,
    @Args() args: UpsertServiceArgs
  ): Promise<Service> {
    const res: Service = await getPrismaFromContext(ctx).service.upsert({
      ...args,
      include: {
        current: {
          include: {
            menu: {
              include: {
                fooditems: true,
              },
            },
          },
        },
      },
    });
    if (res) {
      const fooditems = res.current?.menu?.fooditems;
      const availability = fooditems?.reduce(
        (a: { [key: number]: boolean }, v: FoodItem) => {
          return { ...a, [v.id]: v.available };
        },
        {}
      );
      await setRedisAsync("availability", JSON.stringify(availability));
      await setRedisAsync("menu", res.current?.menu?.id!);
      await setRedisAsync(
        "lastOrder",
        res.current?.lastOrder.setSeconds(0, 0)!
      );
    }
    return res;
  }

  @Mutation((_returns) => Service)
  @UseMiddleware(AdminAuth)
  async terminateService(
    @Ctx() ctx: MyContext,
    @Args() args: UpdateServiceArgs
  ): Promise<Service> {
    const res: Service = await getPrismaFromContext(ctx).service.update({
      ...args,
    });
    if (res) {
      await setRedisAsync("availability", JSON.stringify({}));
      await setRedisAsync("menu", 0);
      await setRedisAsync("lastOrder", 0);
    }
    return res;
  }
}
