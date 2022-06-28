import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutSessionInput } from "../inputs/OrderCreateWithoutSessionInput";
import { OrderUpdateWithoutSessionInput } from "../inputs/OrderUpdateWithoutSessionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutSessionInput", {
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutSessionInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutSessionInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutSessionInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutSessionInput, {
    nullable: false
  })
  create!: OrderCreateWithoutSessionInput;
}
