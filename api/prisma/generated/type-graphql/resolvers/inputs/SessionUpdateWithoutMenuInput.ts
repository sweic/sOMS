import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutSessionInput } from "../inputs/OrderUpdateManyWithoutSessionInput";
import { ServiceUpdateOneWithoutCurrentInput } from "../inputs/ServiceUpdateOneWithoutCurrentInput";
import { TableUpdateManyWithoutSessionInput } from "../inputs/TableUpdateManyWithoutSessionInput";

@TypeGraphQL.InputType("SessionUpdateWithoutMenuInput", {
  isAbstract: true
})
export class SessionUpdateWithoutMenuInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  lastOrder?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  table?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  revenue?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceUpdateOneWithoutCurrentInput, {
    nullable: true
  })
  service?: ServiceUpdateOneWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => TableUpdateManyWithoutSessionInput, {
    nullable: true
  })
  tables?: TableUpdateManyWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutSessionInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutSessionInput | undefined;
}
