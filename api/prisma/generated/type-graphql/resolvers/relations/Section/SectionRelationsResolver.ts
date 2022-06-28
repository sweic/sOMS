import * as TypeGraphQL from "type-graphql";
import { FoodItem } from "../../../models/FoodItem";
import { Image } from "../../../models/Image";
import { Menu } from "../../../models/Menu";
import { Section } from "../../../models/Section";
import { SectionFooditemsArgs } from "./args/SectionFooditemsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Section)
export class SectionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FoodItem], {
    nullable: false
  })
  async fooditems(@TypeGraphQL.Root() section: Section, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SectionFooditemsArgs): Promise<FoodItem[]> {
    return getPrismaFromContext(ctx).section.findUnique({
      where: {
        id: section.id,
      },
    }).fooditems(args);
  }

  @TypeGraphQL.FieldResolver(_type => Menu, {
    nullable: false
  })
  async menu(@TypeGraphQL.Root() section: Section, @TypeGraphQL.Ctx() ctx: any): Promise<Menu> {
    return getPrismaFromContext(ctx).section.findUnique({
      where: {
        id: section.id,
      },
    }).menu({});
  }

  @TypeGraphQL.FieldResolver(_type => Image, {
    nullable: true
  })
  async image(@TypeGraphQL.Root() section: Section, @TypeGraphQL.Ctx() ctx: any): Promise<Image | null> {
    return getPrismaFromContext(ctx).section.findUnique({
      where: {
        id: section.id,
      },
    }).image({});
  }
}
