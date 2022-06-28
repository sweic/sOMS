import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemOrderByRelationAggregateInput } from "../inputs/OrderItemOrderByRelationAggregateInput";
import { SessionOrderByWithRelationInput } from "../inputs/SessionOrderByWithRelationInput";
import { TableOrderByWithRelationInput } from "../inputs/TableOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderOrderByWithRelationInput", {
  isAbstract: true
})
export class OrderOrderByWithRelationInput {
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
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TableOrderByWithRelationInput, {
    nullable: true
  })
  table?: TableOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tableid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderItemOrderByRelationAggregateInput, {
    nullable: true
  })
  orderitems?: OrderItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionOrderByWithRelationInput, {
    nullable: true
  })
  session?: SessionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sessionid?: "asc" | "desc" | undefined;
}
