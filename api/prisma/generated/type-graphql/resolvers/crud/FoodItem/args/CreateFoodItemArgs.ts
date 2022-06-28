import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemCreateInput } from "../../../inputs/FoodItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemCreateInput, {
    nullable: false
  })
  data!: FoodItemCreateInput;
}
