import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";

@TypeGraphQL.ObjectType("OrderGroupBy", {
  isAbstract: true
})
export class OrderGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tableNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tableid!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sessionid!: number;

  @TypeGraphQL.Field(_type => OrderCountAggregate, {
    nullable: true
  })
  _count!: OrderCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderAvgAggregate, {
    nullable: true
  })
  _avg!: OrderAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderSumAggregate, {
    nullable: true
  })
  _sum!: OrderSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderMinAggregate, {
    nullable: true
  })
  _min!: OrderMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderMaxAggregate, {
    nullable: true
  })
  _max!: OrderMaxAggregate | null;
}
