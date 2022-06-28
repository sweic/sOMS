import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemUpdateWithoutMenuInput } from "../inputs/FoodItemUpdateWithoutMenuInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpdateWithWhereUniqueWithoutMenuInput", {
  isAbstract: true
})
export class FoodItemUpdateWithWhereUniqueWithoutMenuInput {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemUpdateWithoutMenuInput, {
    nullable: false
  })
  data!: FoodItemUpdateWithoutMenuInput;
}
