import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateOrConnectWithoutOrdersInput } from "../inputs/SessionCreateOrConnectWithoutOrdersInput";
import { SessionCreateWithoutOrdersInput } from "../inputs/SessionCreateWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class SessionCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => SessionCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: SessionCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionWhereUniqueInput | undefined;
}
