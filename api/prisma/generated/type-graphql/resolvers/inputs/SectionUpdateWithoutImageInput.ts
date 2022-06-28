import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemUpdateManyWithoutSectionsInput } from "../inputs/FoodItemUpdateManyWithoutSectionsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MenuUpdateOneRequiredWithoutSectionsInput } from "../inputs/MenuUpdateOneRequiredWithoutSectionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SectionUpdateWithoutImageInput", {
  isAbstract: true
})
export class SectionUpdateWithoutImageInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemUpdateManyWithoutSectionsInput, {
    nullable: true
  })
  fooditems?: FoodItemUpdateManyWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpdateOneRequiredWithoutSectionsInput, {
    nullable: true
  })
  menu?: MenuUpdateOneRequiredWithoutSectionsInput | undefined;
}
