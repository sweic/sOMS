import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutOrderitemsInput } from "../inputs/OrderCreateNestedOneWithoutOrderitemsInput";

@TypeGraphQL.InputType("OrderItemCreateInput", {
  isAbstract: true
})
export class OrderItemCreateInput {
  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrderitemsInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrderitemsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  foodid!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  totalPrice!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
