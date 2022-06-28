import * as TypeGraphQL from "type-graphql";
import { FoodItem } from "../../../models/FoodItem";
import { Image } from "../../../models/Image";
import { Menu } from "../../../models/Menu";
import { Section } from "../../../models/Section";
import { FoodItemSectionsArgs } from "./args/FoodItemSectionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FoodItem)
export class FoodItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Section], {
    nullable: false
  })
  async sections(@TypeGraphQL.Root() foodItem: FoodItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FoodItemSectionsArgs): Promise<Section[]> {
    return getPrismaFromContext(ctx).foodItem.findUnique({
      where: {
        id: foodItem.id,
      },
    }).sections(args);
  }

  @TypeGraphQL.FieldResolver(_type => Menu, {
    nullable: false
  })
  async menu(@TypeGraphQL.Root() foodItem: FoodItem, @TypeGraphQL.Ctx() ctx: any): Promise<Menu> {
    return getPrismaFromContext(ctx).foodItem.findUnique({
      where: {
        id: foodItem.id,
      },
    }).menu({});
  }

  @TypeGraphQL.FieldResolver(_type => Image, {
    nullable: true
  })
  async image(@TypeGraphQL.Root() foodItem: FoodItem, @TypeGraphQL.Ctx() ctx: any): Promise<Image | null> {
    return getPrismaFromContext(ctx).foodItem.findUnique({
      where: {
        id: foodItem.id,
      },
    }).image({});
  }
}
