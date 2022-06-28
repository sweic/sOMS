import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutOrdersInput } from "../inputs/SessionCreateWithoutOrdersInput";
import { SessionUpdateWithoutOrdersInput } from "../inputs/SessionUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("SessionUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class SessionUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => SessionUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: SessionUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: SessionCreateWithoutOrdersInput;
}
