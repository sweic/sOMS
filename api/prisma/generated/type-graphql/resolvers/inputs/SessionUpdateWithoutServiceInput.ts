import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MenuUpdateOneWithoutSessionsInput } from "../inputs/MenuUpdateOneWithoutSessionsInput";
import { OrderUpdateManyWithoutSessionInput } from "../inputs/OrderUpdateManyWithoutSessionInput";
import { TableUpdateManyWithoutSessionInput } from "../inputs/TableUpdateManyWithoutSessionInput";

@TypeGraphQL.InputType("SessionUpdateWithoutServiceInput", {
  isAbstract: true
})
export class SessionUpdateWithoutServiceInput {
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

  @TypeGraphQL.Field(_type => MenuUpdateOneWithoutSessionsInput, {
    nullable: true
  })
  menu?: MenuUpdateOneWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => TableUpdateManyWithoutSessionInput, {
    nullable: true
  })
  tables?: TableUpdateManyWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutSessionInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutSessionInput | undefined;
}
