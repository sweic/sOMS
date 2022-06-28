import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderItemArgs } from "./args/AggregateOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
import { AggregateOrderItem } from "../../outputs/AggregateOrderItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderItem)
export class AggregateOrderItemResolver {
  @TypeGraphQL.Query(_returns => AggregateOrderItem, {
    nullable: false
  })
  async aggregateOrderItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrderItemArgs): Promise<AggregateOrderItem> {
    return getPrismaFromContext(ctx).orderItem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
