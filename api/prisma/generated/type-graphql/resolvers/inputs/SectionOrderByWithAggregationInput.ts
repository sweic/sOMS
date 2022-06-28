import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionAvgOrderByAggregateInput } from "../inputs/SectionAvgOrderByAggregateInput";
import { SectionCountOrderByAggregateInput } from "../inputs/SectionCountOrderByAggregateInput";
import { SectionMaxOrderByAggregateInput } from "../inputs/SectionMaxOrderByAggregateInput";
import { SectionMinOrderByAggregateInput } from "../inputs/SectionMinOrderByAggregateInput";
import { SectionSumOrderByAggregateInput } from "../inputs/SectionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SectionOrderByWithAggregationInput", {
  isAbstract: true
})
export class SectionOrderByWithAggregationInput {
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
  imageid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SectionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SectionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SectionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SectionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SectionSumOrderByAggregateInput | undefined;
}
