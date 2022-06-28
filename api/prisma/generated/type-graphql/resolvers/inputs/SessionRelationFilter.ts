import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionWhereInput } from "../inputs/SessionWhereInput";

@TypeGraphQL.InputType("SessionRelationFilter", {
  isAbstract: true
})
export class SessionRelationFilter {
  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  is?: SessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  isNot?: SessionWhereInput | undefined;
}
