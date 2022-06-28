import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderItemListRelationFilter } from "../inputs/OrderItemListRelationFilter";
import { SessionRelationFilter } from "../inputs/SessionRelationFilter";
import { TableRelationFilter } from "../inputs/TableRelationFilter";

@TypeGraphQL.InputType("OrderWhereInput", {
  isAbstract: true
})
export class OrderWhereInput {
  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  AND?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  OR?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  NOT?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tableNumber?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  completedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  price?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => TableRelationFilter, {
    nullable: true
  })
  table?: TableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tableid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => OrderItemListRelationFilter, {
    nullable: true
  })
  orderitems?: OrderItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SessionRelationFilter, {
    nullable: true
  })
  session?: SessionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sessionid?: IntFilter | undefined;
}
