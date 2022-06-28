import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemUpdateOneWithoutImageInput } from "../inputs/FoodItemUpdateOneWithoutImageInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ImageUpdateWithoutSectionImageInput", {
  isAbstract: true
})
export class ImageUpdateWithoutSectionImageInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemUpdateOneWithoutImageInput, {
    nullable: true
  })
  foodImage?: FoodItemUpdateOneWithoutImageInput | undefined;
}
