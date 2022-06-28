import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyMutationInput } from "../inputs/OrderItemUpdateManyMutationInput";

@TypeGraphQL.InputType("OrderItemUpdateManyWithWhereWithoutOrderInput", {
  isAbstract: true
})
export class OrderItemUpdateManyWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderItemScalarWhereInput, {
    nullable: false
  })
  where!: OrderItemScalarWhereInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderItemUpdateManyMutationInput;
}
