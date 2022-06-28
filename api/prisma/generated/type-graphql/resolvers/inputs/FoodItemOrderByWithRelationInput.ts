import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageOrderByWithRelationInput } from "../inputs/ImageOrderByWithRelationInput";
import { MenuOrderByWithRelationInput } from "../inputs/MenuOrderByWithRelationInput";
import { SectionOrderByRelationAggregateInput } from "../inputs/SectionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FoodItemOrderByWithRelationInput", {
  isAbstract: true
})
export class FoodItemOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => SectionOrderByRelationAggregateInput, {
    nullable: true
  })
  sections?: SectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MenuOrderByWithRelationInput, {
    nullable: true
  })
  menu?: MenuOrderByWithRelationInput | undefined;

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

  @TypeGraphQL.Field(_type => ImageOrderByWithRelationInput, {
    nullable: true
  })
  image?: ImageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageid?: "asc" | "desc" | undefined;
}
