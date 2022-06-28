import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManySessionInputEnvelope } from "../inputs/OrderCreateManySessionInputEnvelope";
import { OrderCreateOrConnectWithoutSessionInput } from "../inputs/OrderCreateOrConnectWithoutSessionInput";
import { OrderCreateWithoutSessionInput } from "../inputs/OrderCreateWithoutSessionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutSessionInput", {
  isAbstract: true
})
export class OrderCreateNestedManyWithoutSessionInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutSessionInput], {
    nullable: true
  })
  create?: OrderCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
