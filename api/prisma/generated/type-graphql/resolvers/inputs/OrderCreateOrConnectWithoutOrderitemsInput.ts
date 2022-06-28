import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrderitemsInput } from "../inputs/OrderCreateWithoutOrderitemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrderitemsInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutOrderitemsInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrderitemsInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrderitemsInput;
}
