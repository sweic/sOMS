import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderItem)
export class OrderItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Order, {
    nullable: false
  })
  async order(@TypeGraphQL.Root() orderItem: OrderItem, @TypeGraphQL.Ctx() ctx: any): Promise<Order> {
    return getPrismaFromContext(ctx).orderItem.findUnique({
      where: {
        id: orderItem.id,
      },
    }).order({});
  }
}
