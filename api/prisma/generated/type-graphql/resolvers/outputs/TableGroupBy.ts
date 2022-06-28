import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableAvgAggregate } from "../outputs/TableAvgAggregate";
import { TableCountAggregate } from "../outputs/TableCountAggregate";
import { TableMaxAggregate } from "../outputs/TableMaxAggregate";
import { TableMinAggregate } from "../outputs/TableMinAggregate";
import { TableSumAggregate } from "../outputs/TableSumAggregate";

@TypeGraphQL.ObjectType("TableGroupBy", {
  isAbstract: true
})
export class TableGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sessionid!: number | null;

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
