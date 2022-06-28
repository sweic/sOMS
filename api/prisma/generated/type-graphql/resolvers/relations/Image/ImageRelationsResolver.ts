import * as TypeGraphQL from "type-graphql";
import { FoodItem } from "../../../models/FoodItem";
import { Image } from "../../../models/Image";
import { Section } from "../../../models/Section";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Image)
export class ImageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => FoodItem, {
    nullable: true
  })
  async foodImage(@TypeGraphQL.Root() image: Image, @TypeGraphQL.Ctx() ctx: any): Promise<FoodItem | null> {
    return getPrismaFromContext(ctx).image.findUnique({
      where: {
        id: image.id,
      },
    }).foodImage({});
  }

  @TypeGraphQL.FieldResolver(_type => Section, {
    nullable: true
  })
  async sectionImage(@TypeGraphQL.Root() image: Image, @TypeGraphQL.Ctx() ctx: any): Promise<Section | null> {
    return getPrismaFromContext(ctx).image.findUnique({
      where: {
        id: image.id,
      },
    }).sectionImage({});
  }
}
