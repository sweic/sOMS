import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemOrderByWithAggregationInput } from "../../../inputs/FoodItemOrderByWithAggregationInput";
import { FoodItemScalarWhereWithAggregatesInput } from "../../../inputs/FoodItemScalarWhereWithAggregatesInput";
import { FoodItemWhereInput } from "../../../inputs/FoodItemWhereInput";
import { FoodItemScalarFieldEnum } from "../../../../enums/FoodItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  where?: FoodItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FoodItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "code" | "title" | "menuid" | "price" | "available" | "options" | "imageid">;

  @TypeGraphQL.Field(_type => FoodItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FoodItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
