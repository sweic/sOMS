import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateWithoutSessionsInput } from "../inputs/MenuCreateWithoutSessionsInput";
import { MenuUpdateWithoutSessionsInput } from "../inputs/MenuUpdateWithoutSessionsInput";

@TypeGraphQL.InputType("MenuUpsertWithoutSessionsInput", {
  isAbstract: true
})
export class MenuUpsertWithoutSessionsInput {
  @TypeGraphQL.Field(_type => MenuUpdateWithoutSessionsInput, {
    nullable: false
  })
  update!: MenuUpdateWithoutSessionsInput;

  @TypeGraphQL.Field(_type => MenuCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: MenuCreateWithoutSessionsInput;
}
