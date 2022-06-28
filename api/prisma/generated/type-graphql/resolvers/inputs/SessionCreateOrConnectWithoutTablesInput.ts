import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutTablesInput } from "../inputs/SessionCreateWithoutTablesInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateOrConnectWithoutTablesInput", {
  isAbstract: true
})
export class SessionCreateOrConnectWithoutTablesInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutTablesInput, {
    nullable: false
  })
  create!: SessionCreateWithoutTablesInput;
}
