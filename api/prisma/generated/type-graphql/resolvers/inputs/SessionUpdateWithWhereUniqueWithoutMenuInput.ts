import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionUpdateWithoutMenuInput } from "../inputs/SessionUpdateWithoutMenuInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateWithWhereUniqueWithoutMenuInput", {
  isAbstract: true
})
export class SessionUpdateWithWhereUniqueWithoutMenuInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionUpdateWithoutMenuInput, {
    nullable: false
  })
  data!: SessionUpdateWithoutMenuInput;
}
