import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrderitemsInput } from "../inputs/OrderCreateOrConnectWithoutOrderitemsInput";
import { OrderCreateWithoutOrderitemsInput } from "../inputs/OrderCreateWithoutOrderitemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrderitemsInput", {
  isAbstract: true
})
export class OrderCreateNestedOneWithoutOrderitemsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrderitemsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrderitemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderitemsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrderitemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
