import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemCreateInput } from "../../../inputs/FoodItemCreateInput";
import { FoodItemUpdateInput } from "../../../inputs/FoodItemUpdateInput";
import { FoodItemWhereUniqueInput } from "../../../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemCreateInput, {
    nullable: false
  })
  create!: FoodItemCreateInput;

  @TypeGraphQL.Field(_type => FoodItemUpdateInput, {
    nullable: false
  })
  update!: FoodItemUpdateInput;
}
