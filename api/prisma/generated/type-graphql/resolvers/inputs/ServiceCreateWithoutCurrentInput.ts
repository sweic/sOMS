import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ServiceCreateWithoutCurrentInput", {
  isAbstract: true
})
export class ServiceCreateWithoutCurrentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dummy?: string | undefined;
}
