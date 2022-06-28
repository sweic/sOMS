import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemWhereUniqueInput } from "../../../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;
}
