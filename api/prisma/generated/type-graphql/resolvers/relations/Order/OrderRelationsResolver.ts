import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { Session } from "../../../models/Session";
import { Table } from "../../../models/Table";
import { OrderOrderitemsArgs } from "./args/OrderOrderitemsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Table, {
    nullable: false
  })
  async table(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Table> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).table({});
  }

  @TypeGraphQL.FieldResolver(_type => [OrderItem], {
    nullable: false
  })
  async orderitems(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrderOrderitemsArgs): Promise<OrderItem[]> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).orderitems(args);
  }

  @TypeGraphQL.FieldResolver(_type => Session, {
    nullable: false
  })
  async session(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Session> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).session({});
  }
}
