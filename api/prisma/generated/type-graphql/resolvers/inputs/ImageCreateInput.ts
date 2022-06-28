import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateNestedOneWithoutImageInput } from "../inputs/FoodItemCreateNestedOneWithoutImageInput";
import { SectionCreateNestedOneWithoutImageInput } from "../inputs/SectionCreateNestedOneWithoutImageInput";

@TypeGraphQL.InputType("ImageCreateInput", {
  isAbstract: true
})
export class ImageCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imageURL!: string;

  @TypeGraphQL.Field(_type => FoodItemCreateNestedOneWithoutImageInput, {
    nullable: true
  })
  foodImage?: FoodItemCreateNestedOneWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => SectionCreateNestedOneWithoutImageInput, {
    nullable: true
  })
  sectionImage?: SectionCreateNestedOneWithoutImageInput | undefined;
}
