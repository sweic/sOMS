import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemWhereInput } from "../inputs/FoodItemWhereInput";

@TypeGraphQL.InputType("FoodItemListRelationFilter", {
  isAbstract: true
})
export class FoodItemListRelationFilter {
  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  every?: FoodItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  some?: FoodItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  none?: FoodItemWhereInput | undefined;
}
