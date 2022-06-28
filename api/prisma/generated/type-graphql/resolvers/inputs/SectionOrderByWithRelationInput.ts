import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemOrderByRelationAggregateInput } from "../inputs/FoodItemOrderByRelationAggregateInput";
import { ImageOrderByWithRelationInput } from "../inputs/ImageOrderByWithRelationInput";
import { MenuOrderByWithRelationInput } from "../inputs/MenuOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SectionOrderByWithRelationInput", {
  isAbstract: true
})
export class SectionOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => FoodItemOrderByRelationAggregateInput, {
    nullable: true
  })
  fooditems?: FoodItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MenuOrderByWithRelationInput, {
    nullable: true
  })
  menu?: MenuOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  menuid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ImageOrderByWithRelationInput, {
    nullable: true
  })
  image?: ImageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageid?: "asc" | "desc" | undefined;
}
