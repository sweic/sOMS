import * as TypeGraphQL from "type-graphql";
import { FoodItem } from "../../../models/FoodItem";
import { Menu } from "../../../models/Menu";
import { Section } from "../../../models/Section";
import { Session } from "../../../models/Session";
import { MenuFooditemsArgs } from "./args/MenuFooditemsArgs";
import { MenuSectionsArgs } from "./args/MenuSectionsArgs";
import { MenuSessionsArgs } from "./args/MenuSessionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Menu)
export class MenuRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Session], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Root() menu: Menu, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MenuSessionsArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).menu.findUnique({
      where: {
        id: menu.id,
      },
    }).sessions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Section], {
    nullable: false
  })
  async sections(@TypeGraphQL.Root() menu: Menu, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MenuSectionsArgs): Promise<Section[]> {
    return getPrismaFromContext(ctx).menu.findUnique({
      where: {
        id: menu.id,
      },
    }).sections(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FoodItem], {
    nullable: false
  })
  async fooditems(@TypeGraphQL.Root() menu: Menu, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MenuFooditemsArgs): Promise<FoodItem[]> {
    return getPrismaFromContext(ctx).menu.findUnique({
      where: {
        id: menu.id,
      },
    }).fooditems(args);
  }
}
