import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuWhereInput } from "../inputs/MenuWhereInput";

@TypeGraphQL.InputType("MenuRelationFilter", {
  isAbstract: true
})
export class MenuRelationFilter {
  @TypeGraphQL.Field(_type => MenuWhereInput, {
    nullable: true
  })
  is?: MenuWhereInput | undefined;

  @TypeGraphQL.Field(_type => MenuWhereInput, {
    nullable: true
  })
  isNot?: MenuWhereInput | undefined;
}
