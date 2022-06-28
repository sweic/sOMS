import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFoodItemArgs } from "./args/GroupByFoodItemArgs";
import { FoodItem } from "../../../models/FoodItem";
import { FoodItemGroupBy } from "../../outputs/FoodItemGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodItem)
export class GroupByFoodItemResolver {
  @TypeGraphQL.Query(_returns => [FoodItemGroupBy], {
    nullable: false
  })
  async groupByFoodItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFoodItemArgs): Promise<FoodItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodItem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
