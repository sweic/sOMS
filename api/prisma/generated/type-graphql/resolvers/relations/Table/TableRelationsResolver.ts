import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { Session } from "../../../models/Session";
import { Table } from "../../../models/Table";
import { TableOrdersArgs } from "./args/TableOrdersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Table)
export class TableRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Session, {
    nullable: true
  })
  async session(@TypeGraphQL.Root() table: Table, @TypeGraphQL.Ctx() ctx: any): Promise<Session | null> {
    return getPrismaFromContext(ctx).table.findUnique({
      where: {
        id: table.id,
      },
    }).session({});
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() table: Table, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TableOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).table.findUnique({
      where: {
        id: table.id,
      },
    }).orders(args);
  }
}
