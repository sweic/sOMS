import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemOrderByRelationAggregateInput } from "../inputs/FoodItemOrderByRelationAggregateInput";
import { SectionOrderByRelationAggregateInput } from "../inputs/SectionOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MenuOrderByWithRelationInput", {
  isAbstract: true
})
export class MenuOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput, {
    nullable: true
  })
  sessions?: SessionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SectionOrderByRelationAggregateInput, {
    nullable: true
  })
  sections?: SectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemOrderByRelationAggregateInput, {
    nullable: true
  })
  fooditems?: FoodItemOrderByRelationAggregateInput | undefined;
}
