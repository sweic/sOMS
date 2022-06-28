import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutServiceInput } from "../inputs/SessionCreateWithoutServiceInput";
import { SessionUpdateWithoutServiceInput } from "../inputs/SessionUpdateWithoutServiceInput";

@TypeGraphQL.InputType("SessionUpsertWithoutServiceInput", {
  isAbstract: true
})
export class SessionUpsertWithoutServiceInput {
  @TypeGraphQL.Field(_type => SessionUpdateWithoutServiceInput, {
    nullable: false
  })
  update!: SessionUpdateWithoutServiceInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutServiceInput, {
    nullable: false
  })
  create!: SessionCreateWithoutServiceInput;
}
