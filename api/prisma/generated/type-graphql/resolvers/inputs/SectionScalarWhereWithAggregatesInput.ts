import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SectionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SectionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  code?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  menuid?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  imageid?: IntNullableWithAggregatesFilter | undefined;
}
