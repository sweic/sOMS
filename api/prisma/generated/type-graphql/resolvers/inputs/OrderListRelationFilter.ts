import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderListRelationFilter", {
  isAbstract: true
})
export class OrderListRelationFilter {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  every?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  some?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  none?: OrderWhereInput | undefined;
}
