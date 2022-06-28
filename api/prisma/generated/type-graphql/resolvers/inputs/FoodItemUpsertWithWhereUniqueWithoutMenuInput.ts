import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateWithoutMenuInput } from "../inputs/FoodItemCreateWithoutMenuInput";
import { FoodItemUpdateWithoutMenuInput } from "../inputs/FoodItemUpdateWithoutMenuInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpsertWithWhereUniqueWithoutMenuInput", {
  isAbstract: true
})
export class FoodItemUpsertWithWhereUniqueWithoutMenuInput {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemUpdateWithoutMenuInput, {
    nullable: false
  })
  update!: FoodItemUpdateWithoutMenuInput;

  @TypeGraphQL.Field(_type => FoodItemCreateWithoutMenuInput, {
    nullable: false
  })
  create!: FoodItemCreateWithoutMenuInput;
}
