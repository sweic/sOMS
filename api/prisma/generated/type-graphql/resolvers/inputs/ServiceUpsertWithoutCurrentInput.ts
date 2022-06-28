import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateWithoutCurrentInput } from "../inputs/ServiceCreateWithoutCurrentInput";
import { ServiceUpdateWithoutCurrentInput } from "../inputs/ServiceUpdateWithoutCurrentInput";

@TypeGraphQL.InputType("ServiceUpsertWithoutCurrentInput", {
  isAbstract: true
})
export class ServiceUpsertWithoutCurrentInput {
  @TypeGraphQL.Field(_type => ServiceUpdateWithoutCurrentInput, {
    nullable: false
  })
  update!: ServiceUpdateWithoutCurrentInput;

  @TypeGraphQL.Field(_type => ServiceCreateWithoutCurrentInput, {
    nullable: false
  })
  create!: ServiceCreateWithoutCurrentInput;
}
