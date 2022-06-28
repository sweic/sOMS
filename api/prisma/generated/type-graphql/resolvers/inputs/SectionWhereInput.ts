import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemListRelationFilter } from "../inputs/FoodItemListRelationFilter";
import { ImageRelationFilter } from "../inputs/ImageRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MenuRelationFilter } from "../inputs/MenuRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SectionWhereInput", {
  isAbstract: true
})
export class SectionWhereInput {
  @TypeGraphQL.Field(_type => [SectionWhereInput], {
    nullable: true
  })
  AND?: SectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereInput], {
    nullable: true
  })
  OR?: SectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereInput], {
    nullable: true
  })
  NOT?: SectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  code?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FoodItemListRelationFilter, {
    nullable: true
  })
  fooditems?: FoodItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MenuRelationFilter, {
    nullable: true
  })
  menu?: MenuRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  menuid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ImageRelationFilter, {
    nullable: true
  })
  image?: ImageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  imageid?: IntNullableFilter | undefined;
}
