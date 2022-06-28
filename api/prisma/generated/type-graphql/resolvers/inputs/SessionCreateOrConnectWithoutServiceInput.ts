import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutServiceInput } from "../inputs/SessionCreateWithoutServiceInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateOrConnectWithoutServiceInput", {
  isAbstract: true
})
export class SessionCreateOrConnectWithoutServiceInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutServiceInput, {
    nullable: false
  })
  create!: SessionCreateWithoutServiceInput;
}
