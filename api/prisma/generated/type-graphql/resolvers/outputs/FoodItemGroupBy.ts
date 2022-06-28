import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemAvgAggregate } from "../outputs/FoodItemAvgAggregate";
import { FoodItemCountAggregate } from "../outputs/FoodItemCountAggregate";
import { FoodItemMaxAggregate } from "../outputs/FoodItemMaxAggregate";
import { FoodItemMinAggregate } from "../outputs/FoodItemMinAggregate";
import { FoodItemSumAggregate } from "../outputs/FoodItemSumAggregate";

@TypeGraphQL.ObjectType("FoodItemGroupBy", {
  isAbstract: true
})
export class FoodItemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  code!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  menuid!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  available!: boolean;

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: true
  })
  options!: Prisma.JsonValue[] | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  imageid!: number | null;

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
