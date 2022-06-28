import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyTableInputEnvelope } from "../inputs/OrderCreateManyTableInputEnvelope";
import { OrderCreateOrConnectWithoutTableInput } from "../inputs/OrderCreateOrConnectWithoutTableInput";
import { OrderCreateWithoutTableInput } from "../inputs/OrderCreateWithoutTableInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutTableInput } from "../inputs/OrderUpdateManyWithWhereWithoutTableInput";
import { OrderUpdateWithWhereUniqueWithoutTableInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutTableInput";
import { OrderUpsertWithWhereUniqueWithoutTableInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutTableInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutTableInput", {
  isAbstract: true
})
export class OrderUpdateManyWithoutTableInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutTableInput], {
    nullable: true
  })
  create?: OrderCreateWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutTableInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutTableInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyTableInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyTableInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutTableInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutTableInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
