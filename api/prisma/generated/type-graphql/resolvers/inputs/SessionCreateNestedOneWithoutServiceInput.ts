import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateOrConnectWithoutServiceInput } from "../inputs/SessionCreateOrConnectWithoutServiceInput";
import { SessionCreateWithoutServiceInput } from "../inputs/SessionCreateWithoutServiceInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateNestedOneWithoutServiceInput", {
  isAbstract: true
})
export class SessionCreateNestedOneWithoutServiceInput {
  @TypeGraphQL.Field(_type => SessionCreateWithoutServiceInput, {
    nullable: true
  })
  create?: SessionCreateWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutServiceInput, {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionWhereUniqueInput | undefined;
}
