import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableWhereInput } from "../inputs/TableWhereInput";

@TypeGraphQL.InputType("TableListRelationFilter", {
  isAbstract: true
})
export class TableListRelationFilter {
  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  every?: TableWhereInput | undefined;

  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  some?: TableWhereInput | undefined;

  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  none?: TableWhereInput | undefined;
}
