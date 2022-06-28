import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ServiceCreateManyInput", {
  isAbstract: true
})
export class ServiceCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  currentid?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dummy?: string | undefined;
}
