import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateWithoutSessionsInput } from "../inputs/MenuCreateWithoutSessionsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuCreateOrConnectWithoutSessionsInput", {
  isAbstract: true
})
export class MenuCreateOrConnectWithoutSessionsInput {
  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: false
  })
  where!: MenuWhereUniqueInput;

  @TypeGraphQL.Field(_type => MenuCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: MenuCreateWithoutSessionsInput;
}
