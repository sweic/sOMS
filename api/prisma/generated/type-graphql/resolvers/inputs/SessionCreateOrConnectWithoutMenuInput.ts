import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutMenuInput } from "../inputs/SessionCreateWithoutMenuInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateOrConnectWithoutMenuInput", {
  isAbstract: true
})
export class SessionCreateOrConnectWithoutMenuInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutMenuInput, {
    nullable: false
  })
  create!: SessionCreateWithoutMenuInput;
}
