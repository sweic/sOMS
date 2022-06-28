import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemUpdateManyMutationInput } from "../../../inputs/FoodItemUpdateManyMutationInput";
import { FoodItemWhereInput } from "../../../inputs/FoodItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  where?: FoodItemWhereInput | undefined;
}
