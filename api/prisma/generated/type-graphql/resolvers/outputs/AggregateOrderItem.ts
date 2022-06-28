import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemAvgAggregate } from "../outputs/OrderItemAvgAggregate";
import { OrderItemCountAggregate } from "../outputs/OrderItemCountAggregate";
import { OrderItemMaxAggregate } from "../outputs/OrderItemMaxAggregate";
import { OrderItemMinAggregate } from "../outputs/OrderItemMinAggregate";
import { OrderItemSumAggregate } from "../outputs/OrderItemSumAggregate";

@TypeGraphQL.ObjectType("AggregateOrderItem", {
  isAbstract: true
})
export class AggregateOrderItem {
  @TypeGraphQL.Field(_type => OrderItemCountAggregate, {
    nullable: true
  })
  _count!: OrderItemCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderItemAvgAggregate, {
    nullable: true
  })
  _avg!: OrderItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderItemSumAggregate, {
    nullable: true
  })
  _sum!: OrderItemSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderItemMinAggregate, {
    nullable: true
  })
  _min!: OrderItemMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderItemMaxAggregate, {
    nullable: true
  })
  _max!: OrderItemMaxAggregate | null;
}
