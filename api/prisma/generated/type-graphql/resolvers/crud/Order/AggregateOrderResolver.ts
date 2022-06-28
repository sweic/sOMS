import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderArgs } from "./args/AggregateOrderArgs";
import { Order } from "../../../models/Order";
import { AggregateOrder } from "../../outputs/AggregateOrder";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class AggregateOrderResolver {
  @TypeGraphQL.Query(_returns => AggregateOrder, {
    nullable: false
  })
  async aggregateOrder(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrderArgs): Promise<AggregateOrder> {
    return getPrismaFromContext(ctx).order.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
