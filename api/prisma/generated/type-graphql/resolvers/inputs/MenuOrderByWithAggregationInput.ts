import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuAvgOrderByAggregateInput } from "../inputs/MenuAvgOrderByAggregateInput";
import { MenuCountOrderByAggregateInput } from "../inputs/MenuCountOrderByAggregateInput";
import { MenuMaxOrderByAggregateInput } from "../inputs/MenuMaxOrderByAggregateInput";
import { MenuMinOrderByAggregateInput } from "../inputs/MenuMinOrderByAggregateInput";
import { MenuSumOrderByAggregateInput } from "../inputs/MenuSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MenuOrderByWithAggregationInput", {
  isAbstract: true
})
export class MenuOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MenuCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MenuCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MenuAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MenuAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MenuMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MenuMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MenuMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MenuMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MenuSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MenuSumOrderByAggregateInput | undefined;
}
