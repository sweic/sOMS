import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutOrdersInput } from "../inputs/SessionCreateWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class SessionCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: SessionCreateWithoutOrdersInput;
}
