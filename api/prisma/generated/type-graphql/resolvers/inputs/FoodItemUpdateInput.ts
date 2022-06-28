import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FoodItemUpdateoptionsInput } from "../inputs/FoodItemUpdateoptionsInput";
import { ImageUpdateOneWithoutFoodImageInput } from "../inputs/ImageUpdateOneWithoutFoodImageInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MenuUpdateOneRequiredWithoutFooditemsInput } from "../inputs/MenuUpdateOneRequiredWithoutFooditemsInput";
import { SectionUpdateManyWithoutFooditemsInput } from "../inputs/SectionUpdateManyWithoutFooditemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FoodItemUpdateInput", {
  isAbstract: true
})
export class FoodItemUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SectionUpdateManyWithoutFooditemsInput, {
    nullable: true
  })
  sections?: SectionUpdateManyWithoutFooditemsInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpdateOneRequiredWithoutFooditemsInput, {
    nullable: true
  })
  menu?: MenuUpdateOneRequiredWithoutFooditemsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  available?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemUpdateoptionsInput, {
    nullable: true
  })
  options?: FoodItemUpdateoptionsInput | undefined;

  @TypeGraphQL.Field(_type => ImageUpdateOneWithoutFoodImageInput, {
    nullable: true
  })
  image?: ImageUpdateOneWithoutFoodImageInput | undefined;
}
