import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFoodItemArgs } from "./args/AggregateFoodItemArgs";
import { FoodItem } from "../../../models/FoodItem";
import { AggregateFoodItem } from "../../outputs/AggregateFoodItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodItem)
export class AggregateFoodItemResolver {
  @TypeGraphQL.Query(_returns => AggregateFoodItem, {
    nullable: false
  })
  async aggregateFoodItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFoodItemArgs): Promise<AggregateFoodItem> {
    return getPrismaFromContext(ctx).foodItem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
