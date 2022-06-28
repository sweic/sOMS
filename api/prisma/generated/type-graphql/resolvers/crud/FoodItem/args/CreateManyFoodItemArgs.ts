import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemCreateManyInput } from "../../../inputs/FoodItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFoodItemArgs {
  @TypeGraphQL.Field(_type => [FoodItemCreateManyInput], {
    nullable: false
  })
  data!: FoodItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
