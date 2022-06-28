import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMenuArgs } from "./args/AggregateMenuArgs";
import { CreateManyMenuArgs } from "./args/CreateManyMenuArgs";
import { CreateMenuArgs } from "./args/CreateMenuArgs";
import { DeleteManyMenuArgs } from "./args/DeleteManyMenuArgs";
import { DeleteMenuArgs } from "./args/DeleteMenuArgs";
import { FindFirstMenuArgs } from "./args/FindFirstMenuArgs";
import { FindManyMenuArgs } from "./args/FindManyMenuArgs";
import { FindUniqueMenuArgs } from "./args/FindUniqueMenuArgs";
import { GroupByMenuArgs } from "./args/GroupByMenuArgs";
import { UpdateManyMenuArgs } from "./args/UpdateManyMenuArgs";
import { UpdateMenuArgs } from "./args/UpdateMenuArgs";
import { UpsertMenuArgs } from "./args/UpsertMenuArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Menu } from "../../../models/Menu";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMenu } from "../../outputs/AggregateMenu";
import { MenuGroupBy } from "../../outputs/MenuGroupBy";
import { AdminAuth } from "../../../../../../middleware/adminAuth";

@TypeGraphQL.Resolver((_of) => Menu)
export class MenuCrudResolver {
  @TypeGraphQL.Query((_returns) => Menu, {
    nullable: true,
  })
  async menu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMenuArgs
  ): Promise<Menu | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Menu, {
    nullable: true,
  })
  async findFirstMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMenuArgs
  ): Promise<Menu | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Menu], {
    nullable: false,
  })
  async menus(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMenuArgs
  ): Promise<Menu[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => Menu, {
    nullable: false,
  })
  async createMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMenuArgs
  ): Promise<Menu> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMenuArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => Menu, {
    nullable: true,
  })
  async deleteMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMenuArgs
  ): Promise<Menu | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => Menu, {
    nullable: true,
  })
  async updateMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMenuArgs
  ): Promise<Menu | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMenuArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMenuArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Menu, {
    nullable: false,
  })
  async upsertMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMenuArgs
  ): Promise<Menu> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).menu.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateMenu, {
    nullable: false,
  })
  async aggregateMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMenuArgs
  ): Promise<AggregateMenu> {
    return getPrismaFromContext(ctx).menu.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MenuGroupBy], {
    nullable: false,
  })
  async groupByMenu(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMenuArgs
  ): Promise<MenuGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).menu.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
}
