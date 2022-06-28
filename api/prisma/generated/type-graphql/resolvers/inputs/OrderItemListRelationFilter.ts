import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemWhereInput } from "../inputs/OrderItemWhereInput";

@TypeGraphQL.InputType("OrderItemListRelationFilter", {
  isAbstract: true
})
export class OrderItemListRelationFilter {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  every?: OrderItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  some?: OrderItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  none?: OrderItemWhereInput | undefined;
}
