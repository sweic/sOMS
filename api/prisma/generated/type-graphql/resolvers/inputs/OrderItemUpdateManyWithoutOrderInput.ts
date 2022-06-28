import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateManyOrderInputEnvelope } from "../inputs/OrderItemCreateManyOrderInputEnvelope";
import { OrderItemCreateOrConnectWithoutOrderInput } from "../inputs/OrderItemCreateOrConnectWithoutOrderInput";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderItemUpdateManyWithWhereWithoutOrderInput";
import { OrderItemUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutOrderInput";
import { OrderItemUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemUpdateManyWithoutOrderInput", {
  isAbstract: true
})
export class OrderItemUpdateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput], {
    nullable: true
  })
  create?: OrderItemCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderItemCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: OrderItemCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  set?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderItemScalarWhereInput[] | undefined;
}
