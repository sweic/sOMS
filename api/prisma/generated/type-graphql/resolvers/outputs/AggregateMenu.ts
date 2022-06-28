import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuAvgAggregate } from "../outputs/MenuAvgAggregate";
import { MenuCountAggregate } from "../outputs/MenuCountAggregate";
import { MenuMaxAggregate } from "../outputs/MenuMaxAggregate";
import { MenuMinAggregate } from "../outputs/MenuMinAggregate";
import { MenuSumAggregate } from "../outputs/MenuSumAggregate";

@TypeGraphQL.ObjectType("AggregateMenu", {
  isAbstract: true
})
export class AggregateMenu {
  @TypeGraphQL.Field(_type => MenuCountAggregate, {
    nullable: true
  })
  _count!: MenuCountAggregate | null;

  @TypeGraphQL.Field(_type => MenuAvgAggregate, {
    nullable: true
  })
  _avg!: MenuAvgAggregate | null;

  @TypeGraphQL.Field(_type => MenuSumAggregate, {
    nullable: true
  })
  _sum!: MenuSumAggregate | null;

  @TypeGraphQL.Field(_type => MenuMinAggregate, {
    nullable: true
  })
  _min!: MenuMinAggregate | null;

  @TypeGraphQL.Field(_type => MenuMaxAggregate, {
    nullable: true
  })
  _max!: MenuMaxAggregate | null;
}
