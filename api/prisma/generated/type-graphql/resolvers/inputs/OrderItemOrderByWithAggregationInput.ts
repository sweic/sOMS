import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemAvgOrderByAggregateInput } from "../inputs/OrderItemAvgOrderByAggregateInput";
import { OrderItemCountOrderByAggregateInput } from "../inputs/OrderItemCountOrderByAggregateInput";
import { OrderItemMaxOrderByAggregateInput } from "../inputs/OrderItemMaxOrderByAggregateInput";
import { OrderItemMinOrderByAggregateInput } from "../inputs/OrderItemMinOrderByAggregateInput";
import { OrderItemSumOrderByAggregateInput } from "../inputs/OrderItemSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderItemOrderByWithAggregationInput", {
  isAbstract: true
})
export class OrderItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  foodid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrderItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrderItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrderItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrderItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrderItemSumOrderByAggregateInput | undefined;
}
