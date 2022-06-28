import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OrderItemUpdateManyWithoutOrderInput } from "../inputs/OrderItemUpdateManyWithoutOrderInput";
import { SessionUpdateOneRequiredWithoutOrdersInput } from "../inputs/SessionUpdateOneRequiredWithoutOrdersInput";
import { TableUpdateOneRequiredWithoutOrdersInput } from "../inputs/TableUpdateOneRequiredWithoutOrdersInput";

@TypeGraphQL.InputType("OrderUpdateInput", {
  isAbstract: true
})
export class OrderUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  tableNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  completedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TableUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  table?: TableUpdateOneRequiredWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemUpdateManyWithoutOrderInput, {
    nullable: true
  })
  orderitems?: OrderItemUpdateManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  session?: SessionUpdateOneRequiredWithoutOrdersInput | undefined;
}
