import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableWhereInput } from "../inputs/TableWhereInput";

@TypeGraphQL.InputType("TableRelationFilter", {
  isAbstract: true
})
export class TableRelationFilter {
  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  is?: TableWhereInput | undefined;

  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  isNot?: TableWhereInput | undefined;
}
