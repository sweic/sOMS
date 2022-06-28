import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionWhereInput } from "../inputs/SectionWhereInput";

@TypeGraphQL.InputType("SectionRelationFilter", {
  isAbstract: true
})
export class SectionRelationFilter {
  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  is?: SectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  isNot?: SectionWhereInput | undefined;
}
