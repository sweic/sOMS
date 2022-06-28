import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutTableInput } from "../inputs/OrderCreateWithoutTableInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutTableInput", {
  isAbstract: true
})
export class OrderCreateOrConnectWithoutTableInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutTableInput, {
    nullable: false
  })
  create!: OrderCreateWithoutTableInput;
}
