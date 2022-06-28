import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateWithoutImageInput } from "../inputs/FoodItemCreateWithoutImageInput";
import { FoodItemUpdateWithoutImageInput } from "../inputs/FoodItemUpdateWithoutImageInput";

@TypeGraphQL.InputType("FoodItemUpsertWithoutImageInput", {
  isAbstract: true
})
export class FoodItemUpsertWithoutImageInput {
  @TypeGraphQL.Field(_type => FoodItemUpdateWithoutImageInput, {
    nullable: false
  })
  update!: FoodItemUpdateWithoutImageInput;

  @TypeGraphQL.Field(_type => FoodItemCreateWithoutImageInput, {
    nullable: false
  })
  create!: FoodItemCreateWithoutImageInput;
}
