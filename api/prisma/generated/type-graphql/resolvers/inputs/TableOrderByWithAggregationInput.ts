import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableAvgOrderByAggregateInput } from "../inputs/TableAvgOrderByAggregateInput";
import { TableCountOrderByAggregateInput } from "../inputs/TableCountOrderByAggregateInput";
import { TableMaxOrderByAggregateInput } from "../inputs/TableMaxOrderByAggregateInput";
import { TableMinOrderByAggregateInput } from "../inputs/TableMinOrderByAggregateInput";
import { TableSumOrderByAggregateInput } from "../inputs/TableSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TableOrderByWithAggregationInput", {
  isAbstract: true
})
export class TableOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sessionid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TableCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TableCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TableAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TableAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TableMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TableMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TableMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TableMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TableSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TableSumOrderByAggregateInput | undefined;
}
