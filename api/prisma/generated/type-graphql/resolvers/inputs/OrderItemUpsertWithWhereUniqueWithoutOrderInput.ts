import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemUpdateWithoutOrderInput } from "../inputs/OrderItemUpdateWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemUpsertWithWhereUniqueWithoutOrderInput", {
  isAbstract: true
})
export class OrderItemUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: OrderItemUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => OrderItemCreateWithoutOrderInput, {
    nullable: false
  })
  create!: OrderItemCreateWithoutOrderInput;
}
