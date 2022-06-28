import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionUpdateOneWithoutImageInput } from "../inputs/SectionUpdateOneWithoutImageInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ImageUpdateWithoutFoodImageInput", {
  isAbstract: true
})
export class ImageUpdateWithoutFoodImageInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SectionUpdateOneWithoutImageInput, {
    nullable: true
  })
  sectionImage?: SectionUpdateOneWithoutImageInput | undefined;
}
