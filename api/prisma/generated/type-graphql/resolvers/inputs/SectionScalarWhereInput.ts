import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SectionScalarWhereInput", {
  isAbstract: true
})
export class SectionScalarWhereInput {
  @TypeGraphQL.Field(_type => [SectionScalarWhereInput], {
    nullable: true
  })
  AND?: SectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarWhereInput], {
    nullable: true
  })
  OR?: SectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarWhereInput], {
    nullable: true
  })
  NOT?: SectionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  code?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  menuid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  imageid?: IntNullableFilter | undefined;
}
