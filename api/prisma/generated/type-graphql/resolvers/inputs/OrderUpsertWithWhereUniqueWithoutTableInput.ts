import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutTableInput } from "../inputs/OrderCreateWithoutTableInput";
import { OrderUpdateWithoutTableInput } from "../inputs/OrderUpdateWithoutTableInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutTableInput", {
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutTableInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutTableInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutTableInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutTableInput, {
    nullable: false
  })
  create!: OrderCreateWithoutTableInput;
}
