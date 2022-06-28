import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SectionUpdateManyWithoutMenuInput } from "../inputs/SectionUpdateManyWithoutMenuInput";
import { SessionUpdateManyWithoutMenuInput } from "../inputs/SessionUpdateManyWithoutMenuInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MenuUpdateWithoutFooditemsInput", {
  isAbstract: true
})
export class MenuUpdateWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedat?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutMenuInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutMenuInput | undefined;

  @TypeGraphQL.Field(_type => SectionUpdateManyWithoutMenuInput, {
    nullable: true
  })
  sections?: SectionUpdateManyWithoutMenuInput | undefined;
}
