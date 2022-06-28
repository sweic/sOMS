import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateManyOrderInputEnvelope } from "../inputs/OrderItemCreateManyOrderInputEnvelope";
import { OrderItemCreateOrConnectWithoutOrderInput } from "../inputs/OrderItemCreateOrConnectWithoutOrderInput";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemCreateNestedManyWithoutOrderInput", {
  isAbstract: true
})
export class OrderItemCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput], {
    nullable: true
  })
  create?: OrderItemCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderItemCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: OrderItemCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderItemWhereUniqueInput[] | undefined;
}
