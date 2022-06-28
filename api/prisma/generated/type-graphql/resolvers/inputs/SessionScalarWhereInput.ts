import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("SessionScalarWhereInput", {
  isAbstract: true
})
export class SessionScalarWhereInput {
  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  AND?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  OR?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  NOT?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  lastOrder?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  table?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  revenue?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  menuid?: IntNullableFilter | undefined;
}
