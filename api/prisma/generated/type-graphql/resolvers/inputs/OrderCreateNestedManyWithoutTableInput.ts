import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyTableInputEnvelope } from "../inputs/OrderCreateManyTableInputEnvelope";
import { OrderCreateOrConnectWithoutTableInput } from "../inputs/OrderCreateOrConnectWithoutTableInput";
import { OrderCreateWithoutTableInput } from "../inputs/OrderCreateWithoutTableInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutTableInput", {
  isAbstract: true
})
export class OrderCreateNestedManyWithoutTableInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutTableInput], {
    nullable: true
  })
  create?: OrderCreateWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutTableInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutTableInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyTableInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyTableInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
