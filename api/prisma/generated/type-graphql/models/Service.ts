import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Session } from "../models/Session";

@TypeGraphQL.ObjectType("Service", {
  isAbstract: true
})
export class Service {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  current?: Session | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  currentid?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dummy?: string | null;
}
