import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FoodItemOrderByWithRelationInput } from "../../../inputs/FoodItemOrderByWithRelationInput";
import { FoodItemWhereInput } from "../../../inputs/FoodItemWhereInput";
import { FoodItemWhereUniqueInput } from "../../../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFoodItemArgs {
  @TypeGraphQL.Field(_type => FoodItemWhereInput, {
    nullable: true
  })
  where?: FoodItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FoodItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FoodItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: FoodItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
