import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutSessionInput } from "../inputs/OrderCreateWithoutSessionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutSessionInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutSessionInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutSessionInput, {
    nullable: false
  })
  create!: OrderCreateWithoutSessionInput;
}
