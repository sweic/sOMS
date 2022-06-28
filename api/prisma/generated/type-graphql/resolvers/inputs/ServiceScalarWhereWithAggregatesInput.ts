import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ServiceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ServiceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ServiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ServiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ServiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ServiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  currentid?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  dummy?: StringNullableWithAggregatesFilter | undefined;
}
