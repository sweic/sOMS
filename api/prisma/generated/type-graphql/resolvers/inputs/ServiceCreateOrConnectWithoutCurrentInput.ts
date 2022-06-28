import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateWithoutCurrentInput } from "../inputs/ServiceCreateWithoutCurrentInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceCreateOrConnectWithoutCurrentInput", {
  isAbstract: true
})
export class ServiceCreateOrConnectWithoutCurrentInput {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ServiceCreateWithoutCurrentInput, {
    nullable: false
  })
  create!: ServiceCreateWithoutCurrentInput;
}
