import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemAvgOrderByAggregateInput } from "../inputs/FoodItemAvgOrderByAggregateInput";
import { FoodItemCountOrderByAggregateInput } from "../inputs/FoodItemCountOrderByAggregateInput";
import { FoodItemMaxOrderByAggregateInput } from "../inputs/FoodItemMaxOrderByAggregateInput";
import { FoodItemMinOrderByAggregateInput } from "../inputs/FoodItemMinOrderByAggregateInput";
import { FoodItemSumOrderByAggregateInput } from "../inputs/FoodItemSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodItemOrderByWithAggregationInput", {
  isAbstract: true
})
export class FoodItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  menuid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  available?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  options?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FoodItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FoodItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FoodItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FoodItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FoodItemSumOrderByAggregateInput | undefined;
}
