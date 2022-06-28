import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateOneWithoutServiceInput } from "../inputs/SessionUpdateOneWithoutServiceInput";

@TypeGraphQL.InputType("ServiceUpdateInput", {
  isAbstract: true
})
export class ServiceUpdateInput {
  @TypeGraphQL.Field(_type => SessionUpdateOneWithoutServiceInput, {
    nullable: true
  })
  current?: SessionUpdateOneWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  dummy?: NullableStringFieldUpdateOperationsInput | undefined;
}
