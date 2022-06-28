import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemOrderByWithRelationInput } from "../inputs/FoodItemOrderByWithRelationInput";
import { SectionOrderByWithRelationInput } from "../inputs/SectionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ImageOrderByWithRelationInput", {
  isAbstract: true
})
export class ImageOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageURL?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FoodItemOrderByWithRelationInput, {
    nullable: true
  })
  foodImage?: FoodItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SectionOrderByWithRelationInput, {
    nullable: true
  })
  sectionImage?: SectionOrderByWithRelationInput | undefined;
}
