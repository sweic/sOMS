import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemUpdateWithoutOrderInput } from "../inputs/OrderItemUpdateWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemUpdateWithWhereUniqueWithoutOrderInput", {
  isAbstract: true
})
export class OrderItemUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: OrderItemUpdateWithoutOrderInput;
}
