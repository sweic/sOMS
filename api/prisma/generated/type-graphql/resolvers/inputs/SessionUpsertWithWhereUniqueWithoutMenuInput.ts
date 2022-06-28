import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateWithoutMenuInput } from "../inputs/SessionCreateWithoutMenuInput";
import { SessionUpdateWithoutMenuInput } from "../inputs/SessionUpdateWithoutMenuInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpsertWithWhereUniqueWithoutMenuInput", {
  isAbstract: true
})
export class SessionUpsertWithWhereUniqueWithoutMenuInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionUpdateWithoutMenuInput, {
    nullable: false
  })
  update!: SessionUpdateWithoutMenuInput;

  @TypeGraphQL.Field(_type => SessionCreateWithoutMenuInput, {
    nullable: false
  })
  create!: SessionCreateWithoutMenuInput;
}
