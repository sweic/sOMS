import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateOrConnectWithoutTablesInput } from "../inputs/SessionCreateOrConnectWithoutTablesInput";
import { SessionCreateWithoutTablesInput } from "../inputs/SessionCreateWithoutTablesInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateNestedOneWithoutTablesInput", {
  isAbstract: true
})
export class SessionCreateNestedOneWithoutTablesInput {
  @TypeGraphQL.Field(_type => SessionCreateWithoutTablesInput, {
    nullable: true
  })
  create?: SessionCreateWithoutTablesInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutTablesInput, {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutTablesInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionWhereUniqueInput | undefined;
}
