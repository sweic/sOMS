import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderRelationFilter", {
  isAbstract: true
})
export class OrderRelationFilter {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  is?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  isNot?: OrderWhereInput | undefined;
}
