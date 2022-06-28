import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OrderItemScalarWhereInput", {
  isAbstract: true
})
export class OrderItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  AND?: OrderItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  OR?: OrderItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  NOT?: OrderItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
