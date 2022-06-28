import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemAvgAggregate } from "../outputs/FoodItemAvgAggregate";
import { FoodItemCountAggregate } from "../outputs/FoodItemCountAggregate";
import { FoodItemMaxAggregate } from "../outputs/FoodItemMaxAggregate";
import { FoodItemMinAggregate } from "../outputs/FoodItemMinAggregate";
import { FoodItemSumAggregate } from "../outputs/FoodItemSumAggregate";

@TypeGraphQL.ObjectType("AggregateFoodItem", {
  isAbstract: true
})
export class AggregateFoodItem {
  @TypeGraphQL.Field(_type => FoodItemCountAggregate, {
    nullable: true
  })
  _count!: FoodItemCountAggregate | null;

  @TypeGraphQL.Field(_type => FoodItemAvgAggregate, {
    nullable: true
  })
  _avg!: FoodItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => FoodItemSumAggregate, {
    nullable: true
  })
  _sum!: FoodItemSumAggregate | null;

  @TypeGraphQL.Field(_type => FoodItemMinAggregate, {
    nullable: true
  })
  _min!: FoodItemMinAggregate | null;

  @TypeGraphQL.Field(_type => FoodItemMaxAggregate, {
    nullable: true
  })
  _max!: FoodItemMaxAggregate | null;
}
