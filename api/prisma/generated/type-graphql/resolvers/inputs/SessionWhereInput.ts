import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MenuRelationFilter } from "../inputs/MenuRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { ServiceRelationFilter } from "../inputs/ServiceRelationFilter";
import { TableListRelationFilter } from "../inputs/TableListRelationFilter";

@TypeGraphQL.InputType("SessionWhereInput", {
  isAbstract: true
})
export class SessionWhereInput {
  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  AND?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  OR?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  NOT?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  lastOrder?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  table?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  revenue?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => MenuRelationFilter, {
    nullable: true
  })
  menu?: MenuRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  menuid?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ServiceRelationFilter, {
    nullable: true
  })
  service?: ServiceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TableListRelationFilter, {
    nullable: true
  })
  tables?: TableListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  orders?: OrderListRelationFilter | undefined;
}
