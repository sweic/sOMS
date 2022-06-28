import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { ImageRelationFilter } from "../inputs/ImageRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonNullableListFilter } from "../inputs/JsonNullableListFilter";
import { MenuRelationFilter } from "../inputs/MenuRelationFilter";
import { SectionListRelationFilter } from "../inputs/SectionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FoodItemWhereInput", {
  isAbstract: true
})
export class FoodItemWhereInput {
  @TypeGraphQL.Field(_type => [FoodItemWhereInput], {
    nullable: true
  })
  AND?: FoodItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereInput], {
    nullable: true
  })
  OR?: FoodItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereInput], {
    nullable: true
  })
  NOT?: FoodItemWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => SectionListRelationFilter, {
    nullable: true
  })
  sections?: SectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MenuRelationFilter, {
    nullable: true
  })
  menu?: MenuRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  menuid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  price?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  available?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableListFilter, {
    nullable: true
  })
  options?: JsonNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => ImageRelationFilter, {
    nullable: true
  })
  image?: ImageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  imageid?: IntNullableFilter | undefined;
}
