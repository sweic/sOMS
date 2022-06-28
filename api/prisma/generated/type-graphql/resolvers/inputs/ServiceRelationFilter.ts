import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceWhereInput } from "../inputs/ServiceWhereInput";

@TypeGraphQL.InputType("ServiceRelationFilter", {
  isAbstract: true
})
export class ServiceRelationFilter {
  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  is?: ServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  isNot?: ServiceWhereInput | undefined;
}
