import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OrderItemScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OrderItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrderItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrderItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrderItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  orderid?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  foodid?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  totalPrice?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;
}
