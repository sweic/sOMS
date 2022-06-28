import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManySessionInputEnvelope } from "../inputs/OrderCreateManySessionInputEnvelope";
import { OrderCreateOrConnectWithoutSessionInput } from "../inputs/OrderCreateOrConnectWithoutSessionInput";
import { OrderCreateWithoutSessionInput } from "../inputs/OrderCreateWithoutSessionInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutSessionInput } from "../inputs/OrderUpdateManyWithWhereWithoutSessionInput";
import { OrderUpdateWithWhereUniqueWithoutSessionInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutSessionInput";
import { OrderUpsertWithWhereUniqueWithoutSessionInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutSessionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutSessionInput", {
  isAbstract: true
})
export class OrderUpdateManyWithoutSessionInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutSessionInput], {
    nullable: true
  })
  create?: OrderCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutSessionInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutSessionInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutSessionInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
