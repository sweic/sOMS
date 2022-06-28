import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutTableInput } from "../inputs/OrderUpdateWithoutTableInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutTableInput", {
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutTableInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutTableInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutTableInput;
}
