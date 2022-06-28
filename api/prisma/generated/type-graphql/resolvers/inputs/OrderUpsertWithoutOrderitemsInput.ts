import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrderitemsInput } from "../inputs/OrderCreateWithoutOrderitemsInput";
import { OrderUpdateWithoutOrderitemsInput } from "../inputs/OrderUpdateWithoutOrderitemsInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrderitemsInput", {
  isAbstract: true
})
export class OrderUpsertWithoutOrderitemsInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrderitemsInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrderitemsInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrderitemsInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrderitemsInput;
}
