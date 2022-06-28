import * as TypeGraphQL from "type-graphql";
import { Menu } from "../../../models/Menu";
import { Order } from "../../../models/Order";
import { Service } from "../../../models/Service";
import { Session } from "../../../models/Session";
import { Table } from "../../../models/Table";
import { SessionOrdersArgs } from "./args/SessionOrdersArgs";
import { SessionTablesArgs } from "./args/SessionTablesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class SessionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Menu, {
    nullable: true
  })
  async menu(@TypeGraphQL.Root() session: Session, @TypeGraphQL.Ctx() ctx: any): Promise<Menu | null> {
    return getPrismaFromContext(ctx).session.findUnique({
      where: {
        id: session.id,
      },
    }).menu({});
  }

  @TypeGraphQL.FieldResolver(_type => Service, {
    nullable: true
  })
  async service(@TypeGraphQL.Root() session: Session, @TypeGraphQL.Ctx() ctx: any): Promise<Service | null> {
    return getPrismaFromContext(ctx).session.findUnique({
      where: {
        id: session.id,
      },
    }).service({});
  }

  @TypeGraphQL.FieldResolver(_type => [Table], {
    nullable: false
  })
  async tables(@TypeGraphQL.Root() session: Session, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SessionTablesArgs): Promise<Table[]> {
    return getPrismaFromContext(ctx).session.findUnique({
      where: {
        id: session.id,
      },
    }).tables(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() session: Session, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SessionOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).session.findUnique({
      where: {
        id: session.id,
      },
    }).orders(args);
  }
}
