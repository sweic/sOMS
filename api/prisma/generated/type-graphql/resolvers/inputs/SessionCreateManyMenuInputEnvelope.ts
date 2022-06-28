import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateManyMenuInput } from "../inputs/SessionCreateManyMenuInput";

@TypeGraphQL.InputType("SessionCreateManyMenuInputEnvelope", {
  isAbstract: true
})
export class SessionCreateManyMenuInputEnvelope {
  @TypeGraphQL.Field(_type => [SessionCreateManyMenuInput], {
    nullable: false
  })
  data!: SessionCreateManyMenuInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
