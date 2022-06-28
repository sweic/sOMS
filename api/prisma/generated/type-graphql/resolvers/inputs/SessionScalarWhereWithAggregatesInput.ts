import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SessionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SessionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  lastOrder?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  table?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  revenue?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  menuid?: IntNullableWithAggregatesFilter | undefined;
}
