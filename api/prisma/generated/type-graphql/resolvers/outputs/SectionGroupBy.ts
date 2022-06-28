import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionAvgAggregate } from "../outputs/SectionAvgAggregate";
import { SectionCountAggregate } from "../outputs/SectionCountAggregate";
import { SectionMaxAggregate } from "../outputs/SectionMaxAggregate";
import { SectionMinAggregate } from "../outputs/SectionMinAggregate";
import { SectionSumAggregate } from "../outputs/SectionSumAggregate";

@TypeGraphQL.ObjectType("SectionGroupBy", {
  isAbstract: true
})
export class SectionGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  imageid!: number | null;

  @TypeGraphQL.Field(_type => SectionCountAggregate, {
    nullable: true
  })
  _count!: SectionCountAggregate | null;

  @TypeGraphQL.Field(_type => SectionAvgAggregate, {
    nullable: true
  })
  _avg!: SectionAvgAggregate | null;

  @TypeGraphQL.Field(_type => SectionSumAggregate, {
    nullable: true
  })
  _sum!: SectionSumAggregate | null;

  @TypeGraphQL.Field(_type => SectionMinAggregate, {
    nullable: true
  })
  _min!: SectionMinAggregate | null;

  @TypeGraphQL.Field(_type => SectionMaxAggregate, {
    nullable: true
  })
  _max!: SectionMaxAggregate | null;
}
