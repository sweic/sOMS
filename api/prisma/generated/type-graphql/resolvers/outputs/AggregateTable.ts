import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableAvgAggregate } from "../outputs/TableAvgAggregate";
import { TableCountAggregate } from "../outputs/TableCountAggregate";
import { TableMaxAggregate } from "../outputs/TableMaxAggregate";
import { TableMinAggregate } from "../outputs/TableMinAggregate";
import { TableSumAggregate } from "../outputs/TableSumAggregate";

@TypeGraphQL.ObjectType("AggregateTable", {
  isAbstract: true
})
export class AggregateTable {
  @TypeGraphQL.Field(_type => TableCountAggregate, {
    nullable: true
  })
  _count!: TableCountAggregate | null;

  @TypeGraphQL.Field(_type => TableAvgAggregate, {
    nullable: true
  })
  _avg!: TableAvgAggregate | null;

  @TypeGraphQL.Field(_type => TableSumAggregate, {
    nullable: true
  })
  _sum!: TableSumAggregate | null;

  @TypeGraphQL.Field(_type => TableMinAggregate, {
    nullable: true
  })
  _min!: TableMinAggregate | null;

  @TypeGraphQL.Field(_type => TableMaxAggregate, {
    nullable: true
  })
  _max!: TableMaxAggregate | null;
}
