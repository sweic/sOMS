import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../utils/context";
import { UpdateFoodItemArgs } from "../prisma/generated/type-graphql/resolvers/crud/FoodItem/args/UpdateFoodItemArgs";
import { getPrismaFromContext } from "../prisma/generated/type-graphql/helpers";
import { getRedisAsync, setRedisAsync } from "../utils/redis";
import { FoodItem } from "../prisma/generated/type-graphql/models/FoodItem";
import { AdminAuth } from "../middleware/adminAuth";

@Resolver()
export class EditResolver {
  @Mutation((_returns) => FoodItem)
  @UseMiddleware(AdminAuth)
  async editSafeItem(
    @Ctx() ctx: MyContext,
    @Args() args: UpdateFoodItemArgs
  ): Promise<FoodItem> {
    const res: FoodItem = await getPrismaFromContext(ctx).foodItem.update({
      ...args,
      include: {
        menu: true,
        sections: {
          include: {
            image: true,
          },
        },
        image: true,
      },
    });
    if (res) {
      const currentMenu = await getRedisAsync("menu");
      if (parseInt(currentMenu!) === res?.menu?.id) {
        const availableItemsString = await getRedisAsync("availability");
        const availableItems = JSON.parse(availableItemsString!);
        const newAvailableItems = {
          ...availableItems,
          [res.id]: res.available,
        };
        await setRedisAsync("availability", JSON.stringify(newAvailableItems));
      }
    }
    return res;
  }
}
