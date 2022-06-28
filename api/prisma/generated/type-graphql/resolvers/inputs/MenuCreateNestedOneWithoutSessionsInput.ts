import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateOrConnectWithoutSessionsInput } from "../inputs/MenuCreateOrConnectWithoutSessionsInput";
import { MenuCreateWithoutSessionsInput } from "../inputs/MenuCreateWithoutSessionsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuCreateNestedOneWithoutSessionsInput", {
  isAbstract: true
})
export class MenuCreateNestedOneWithoutSessionsInput {
  @TypeGraphQL.Field(_type => MenuCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: MenuCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: MenuCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: true
  })
  connect?: MenuWhereUniqueInput | undefined;
}
