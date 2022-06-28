import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableListFilter } from "../inputs/JsonNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FoodItemScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FoodItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FoodItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FoodItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FoodItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FoodItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  code?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  menuid?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  price?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  available?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableListFilter, {
    nullable: true
  })
  options?: JsonNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  imageid?: IntNullableWithAggregatesFilter | undefined;
}
