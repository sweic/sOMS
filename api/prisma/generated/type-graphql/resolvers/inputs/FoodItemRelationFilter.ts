import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemWhereInput } from "../inputs/FoodItemWhereInput";

@TypeGraphQL.InputType("FoodItemRelationFilter", {
  isAbstract: true
})
export class FoodItemRelationFilter {
  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  is?: FoodItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  isNot?: FoodItemWhereInput | undefined;
}
