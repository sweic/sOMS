import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { SessionRelationFilter } from "../inputs/SessionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TableWhereInput", {
  isAbstract: true
})
export class TableWhereInput {
  @TypeGraphQL.Field(_type => [TableWhereInput], {
    nullable: true
  })
  AND?: TableWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableWhereInput], {
    nullable: true
  })
  OR?: TableWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableWhereInput], {
    nullable: true
  })
  NOT?: TableWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SessionRelationFilter, {
    nullable: true
  })
  session?: SessionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  sessionid?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  orders?: OrderListRelationFilter | undefined;
}
