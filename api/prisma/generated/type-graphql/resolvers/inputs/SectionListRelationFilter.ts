import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionWhereInput } from "../inputs/SectionWhereInput";

@TypeGraphQL.InputType("SectionListRelationFilter", {
  isAbstract: true
})
export class SectionListRelationFilter {
  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  every?: SectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  some?: SectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  none?: SectionWhereInput | undefined;
}
