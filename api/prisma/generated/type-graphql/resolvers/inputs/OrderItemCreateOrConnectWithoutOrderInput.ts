import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemCreateOrConnectWithoutOrderInput", {
  isAbstract: true
})
export class OrderItemCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemCreateWithoutOrderInput, {
    nullable: false
  })
  create!: OrderItemCreateWithoutOrderInput;
}
