import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemUpdateInput } from "../../../inputs/FoodItemUpdateInput";
import { FoodItemWhereUniqueInput } from "../../../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemUpdateInput, {
    nullable: false
  })
  data!: FoodItemUpdateInput;

  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;
}
