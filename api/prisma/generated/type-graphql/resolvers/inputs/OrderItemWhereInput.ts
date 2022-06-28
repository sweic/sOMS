import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OrderItemWhereInput", {
  isAbstract: true
})
export class OrderItemWhereInput {
  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true
  })
  AND?: OrderItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true
  })
  OR?: OrderItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true
  })
  NOT?: OrderItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  orderid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  foodid?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  totalPrice?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;
}
