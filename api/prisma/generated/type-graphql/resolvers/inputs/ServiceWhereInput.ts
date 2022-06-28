import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SessionRelationFilter } from "../inputs/SessionRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ServiceWhereInput", {
  isAbstract: true
})
export class ServiceWhereInput {
  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  AND?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  OR?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  NOT?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SessionRelationFilter, {
    nullable: true
  })
  current?: SessionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  currentid?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  dummy?: StringNullableFilter | undefined;
}
