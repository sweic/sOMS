import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuOrderByWithRelationInput } from "../inputs/MenuOrderByWithRelationInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { ServiceOrderByWithRelationInput } from "../inputs/ServiceOrderByWithRelationInput";
import { TableOrderByRelationAggregateInput } from "../inputs/TableOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SessionOrderByWithRelationInput", {
  isAbstract: true
})
export class SessionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastOrder?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  table?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  revenue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MenuOrderByWithRelationInput, {
    nullable: true
  })
  menu?: MenuOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  menuid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ServiceOrderByWithRelationInput, {
    nullable: true
  })
  service?: ServiceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TableOrderByRelationAggregateInput, {
    nullable: true
  })
  tables?: TableOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput, {
    nullable: true
  })
  orders?: OrderOrderByRelationAggregateInput | undefined;
}
