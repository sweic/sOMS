import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonNullableListFilter } from "../inputs/JsonNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FoodItemScalarWhereInput", {
  isAbstract: true
})
export class FoodItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [FoodItemScalarWhereInput], {
    nullable: true
  })
  AND?: FoodItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarWhereInput], {
    nullable: true
  })
  OR?: FoodItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarWhereInput], {
    nullable: true
  })
  NOT?: FoodItemScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  imageid?: IntNullableFilter | undefined;
}
