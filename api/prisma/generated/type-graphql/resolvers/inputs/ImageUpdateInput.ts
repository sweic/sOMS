import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemUpdateOneWithoutImageInput } from "../inputs/FoodItemUpdateOneWithoutImageInput";
import { SectionUpdateOneWithoutImageInput } from "../inputs/SectionUpdateOneWithoutImageInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ImageUpdateInput", {
  isAbstract: true
})
export class ImageUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemUpdateOneWithoutImageInput, {
    nullable: true
  })
  foodImage?: FoodItemUpdateOneWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => SectionUpdateOneWithoutImageInput, {
    nullable: true
  })
  sectionImage?: SectionUpdateOneWithoutImageInput | undefined;
}
