import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { SessionOrderByWithRelationInput } from "../inputs/SessionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TableOrderByWithRelationInput", {
  isAbstract: true
})
export class TableOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tableNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  completedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SessionOrderByWithRelationInput, {
    nullable: true
  })
  session?: SessionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sessionid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput, {
    nullable: true
  })
  orders?: OrderOrderByRelationAggregateInput | undefined;
}
