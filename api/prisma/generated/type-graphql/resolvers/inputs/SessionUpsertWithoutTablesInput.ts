import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutTablesInput } from "../inputs/SessionCreateWithoutTablesInput";
import { SessionUpdateWithoutTablesInput } from "../inputs/SessionUpdateWithoutTablesInput";

@TypeGraphQL.InputType("SessionUpsertWithoutTablesInput", {
  isAbstract: true
})
export class SessionUpsertWithoutTablesInput {
  @TypeGraphQL.Field(_type => SessionUpdateWithoutTablesInput, {
    nullable: false
  })
  update!: SessionUpdateWithoutTablesInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutTablesInput, {
    nullable: false
  })
  create!: SessionCreateWithoutTablesInput;
}
