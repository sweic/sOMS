import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateOrConnectWithoutCurrentInput } from "../inputs/ServiceCreateOrConnectWithoutCurrentInput";
import { ServiceCreateWithoutCurrentInput } from "../inputs/ServiceCreateWithoutCurrentInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceCreateNestedOneWithoutCurrentInput", {
  isAbstract: true
})
export class ServiceCreateNestedOneWithoutCurrentInput {
  @TypeGraphQL.Field(_type => ServiceCreateWithoutCurrentInput, {
    nullable: true
  })
  create?: ServiceCreateWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => ServiceCreateOrConnectWithoutCurrentInput, {
    nullable: true
  })
  connectOrCreate?: ServiceCreateOrConnectWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: true
  })
  connect?: ServiceWhereUniqueInput | undefined;
}
