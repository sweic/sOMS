import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceAvgAggregate } from "../outputs/ServiceAvgAggregate";
import { ServiceCountAggregate } from "../outputs/ServiceCountAggregate";
import { ServiceMaxAggregate } from "../outputs/ServiceMaxAggregate";
import { ServiceMinAggregate } from "../outputs/ServiceMinAggregate";
import { ServiceSumAggregate } from "../outputs/ServiceSumAggregate";

@TypeGraphQL.ObjectType("AggregateService", {
  isAbstract: true
})
export class AggregateService {
  @TypeGraphQL.Field(_type => ServiceCountAggregate, {
    nullable: true
  })
  _count!: ServiceCountAggregate | null;

  @TypeGraphQL.Field(_type => ServiceAvgAggregate, {
    nullable: true
  })
  _avg!: ServiceAvgAggregate | null;

  @TypeGraphQL.Field(_type => ServiceSumAggregate, {
    nullable: true
  })
  _sum!: ServiceSumAggregate | null;

  @TypeGraphQL.Field(_type => ServiceMinAggregate, {
    nullable: true
  })
  _min!: ServiceMinAggregate | null;

  @TypeGraphQL.Field(_type => ServiceMaxAggregate, {
    nullable: true
  })
  _max!: ServiceMaxAggregate | null;
}
