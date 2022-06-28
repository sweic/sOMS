import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemAvgAggregate } from "../outputs/OrderItemAvgAggregate";
import { OrderItemCountAggregate } from "../outputs/OrderItemCountAggregate";
import { OrderItemMaxAggregate } from "../outputs/OrderItemMaxAggregate";
import { OrderItemMinAggregate } from "../outputs/OrderItemMinAggregate";
import { OrderItemSumAggregate } from "../outputs/OrderItemSumAggregate";

@TypeGraphQL.ObjectType("OrderItemGroupBy", {
  isAbstract: true
})
export class OrderItemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  orderid!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  foodid!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

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
