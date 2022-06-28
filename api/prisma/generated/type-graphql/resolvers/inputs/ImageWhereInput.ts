import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemRelationFilter } from "../inputs/FoodItemRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SectionRelationFilter } from "../inputs/SectionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ImageWhereInput", {
  isAbstract: true
})
export class ImageWhereInput {
  @TypeGraphQL.Field(_type => [ImageWhereInput], {
    nullable: true
  })
  AND?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereInput], {
    nullable: true
  })
  OR?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageWhereInput], {
    nullable: true
  })
  NOT?: ImageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  imageURL?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FoodItemRelationFilter, {
    nullable: true
  })
  foodImage?: FoodItemRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SectionRelationFilter, {
    nullable: true
  })
  sectionImage?: SectionRelationFilter | undefined;
}
