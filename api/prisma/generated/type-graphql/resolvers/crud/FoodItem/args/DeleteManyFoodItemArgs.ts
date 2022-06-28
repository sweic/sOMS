import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemWhereInput } from "../../../inputs/FoodItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  where?: FoodItemWhereInput | undefined;
}
