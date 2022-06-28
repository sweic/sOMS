import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutSessionInput } from "../inputs/OrderUpdateWithoutSessionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutSessionInput", {
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutSessionInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutSessionInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutSessionInput;
}
