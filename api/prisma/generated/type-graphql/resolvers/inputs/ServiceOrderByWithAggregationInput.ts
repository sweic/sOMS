import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceAvgOrderByAggregateInput } from "../inputs/ServiceAvgOrderByAggregateInput";
import { ServiceCountOrderByAggregateInput } from "../inputs/ServiceCountOrderByAggregateInput";
import { ServiceMaxOrderByAggregateInput } from "../inputs/ServiceMaxOrderByAggregateInput";
import { ServiceMinOrderByAggregateInput } from "../inputs/ServiceMinOrderByAggregateInput";
import { ServiceSumOrderByAggregateInput } from "../inputs/ServiceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ServiceOrderByWithAggregationInput", {
  isAbstract: true
})
export class ServiceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currentid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dummy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ServiceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ServiceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ServiceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ServiceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ServiceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ServiceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ServiceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ServiceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ServiceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ServiceSumOrderByAggregateInput | undefined;
}
